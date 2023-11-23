import { getGeneralTime, secondsToTimeString, timeStringToSeconds } from "./timeCounting";
const { eachDayOfInterval, isWeekend } = require('date-fns');

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export const getMemberWithColor =(data) =>{
    const uniqMembers = [];
    const newArray = data.filter(obj => {
        if (!uniqMembers.find(el => el.Member === obj.Member)){
            uniqMembers.push(obj)
            return true
        }
        return false
    })
    return newArray;
}

export const handleData = (data) => {
  const uniqMember = getUniqueMembers(data);
  const newArray = [];
  for (let value of uniqMember) {
    const element = { member: value, color: getRandomColor() };
    newArray.push({...value,color: getRandomColor()});
  }
  let finishSet = newArray.forEach(m => {
    data.map(el => {
        if(el.Member === m.Member){
            el.color = m.color;
        }
    })
  })
  if(data.length>1){
    data.pop()
  }
  return data;
};

export const getUniqueMembers = (data) => {
    const uniqMembers = new Set();
    const newArray = data.filter(obj => {
        if (!uniqMembers.has(obj.Member)){
            uniqMembers.add(obj.Member)
            return true
        }
        return false
    })
    return newArray;
}

export const getUniqueProjects = (data) => {
    const uniqProjects = new Set();
    
    const uniqProject = data.filter(obj => {
        if (obj.Project?.trim() !=="" && !uniqProjects.has(obj.Project)){
            uniqProjects.add(obj.Project)
            return true
        }
        return false
    })
    return uniqProjects;
}

export const setSets = (sets, project, type) => {
    for (let index = 0; index < sets.length; index++) {
        if(index === type){
            if(sets[index].has(project)){
                sets[index].delete(project);
            }else{
                sets[index].add(project);
            }
        }else{
            sets[index].delete(project);
        }        
    }
    return sets;
}

export const getTotalHours = ({ data, projects, members,vacations }) => {
    let seconds = 0;   
    const filteredData = data.filter(dataItem => {
        const matchingMember = members.find(memberItem => memberItem.Member === dataItem.Member);
        return matchingMember;
      }).map(filteredItem => {
        const matchingMember = members.find(memberItem => memberItem.Member === filteredItem.Member);
        return {
          ...filteredItem,
          isChecked: matchingMember.isChecked,
          vacation: matchingMember.vacation
        };
      });
      let filterMember = []
      filteredData.forEach(element => {
        let tempTime = getGeneralTime(element)
        seconds += timeStringToSeconds(tempTime);
        if((element.vacation > 0 || vacations > 0) && !filterMember.includes(element.Member)){
            filterMember.push(element.Member)
            seconds+=3600*8*element.vacation;
            seconds+=3600*8*vacations;
        }
      });      
      const totalWorkTime = (seconds/members.length).toFixed(2);
      const workTime = countMonthTime(filteredData[0])
      const totalToWorkRelations = ((totalWorkTime)/(workTime/100)).toFixed(2);
      const arrProjects = Array.from(projects, currentSet  => [...currentSet ]);
      const unbillableData = filteredData.filter(b => arrProjects[0].includes(b.Project));
      const billableData = filteredData.filter(b => arrProjects[1].includes(b.Project));
      const unBillableData = filteredData.filter(b => arrProjects[2].includes(b.Project));

      const unbillTotalTime = Math.floor(getTotalTime(unbillableData)/members.length);
      const unbillToTotalRelation = (unbillTotalTime/(totalWorkTime/100)).toFixed(2);
      const hardBillTime = +(getTotalTime(billableData)/members.length).toFixed(2);
      const softBillTime = +(getTotalTime(unBillableData)/members.length).toFixed(2);
      const billTotalTime = (hardBillTime + softBillTime);
      const billToToalRelations = (billTotalTime/(totalWorkTime/100)).toFixed(2);
      const hardToTotalRelation = (hardBillTime/(totalWorkTime/100)).toFixed(2);
      const hardToBillRelation = (hardBillTime/(billTotalTime/100)).toFixed(2);
      const softToTotalRelation = (softBillTime/(totalWorkTime/100)).toFixed(2);
      const softToBillRelation = (softBillTime/(billTotalTime/100)).toFixed(2);
      return (
        {
          totalWorkTime: totalWorkTime && !isNaN(totalWorkTime) ? secondsToTimeString(totalWorkTime) :0, 
          totalToWorkRelations: totalToWorkRelations, 
          unbillTotalTime: unbillTotalTime && !isNaN(unbillTotalTime) ? secondsToTimeString(unbillTotalTime) :0, 
          unbillToTotalRelation: unbillToTotalRelation, 
          billTotalTime: billTotalTime && !isNaN(billTotalTime) ? secondsToTimeString(billTotalTime) :0,
          billToToalRelations: billToToalRelations,
          hardBillTime: hardBillTime && !isNaN(hardBillTime) ? secondsToTimeString(hardBillTime) :0,
          hardToTotalRelation: hardToTotalRelation,
          hardToBillRelation: hardToBillRelation,
          softBillTime: softBillTime && !isNaN(softBillTime) ? secondsToTimeString(softBillTime) :0,
          softToTotalRelation: softToTotalRelation,
          softToBillRelation: softToBillRelation
        });
  }; 

const countMonthTime = (element) => {
    if(element?.Date){
        let year = parseInt(element.Date.split('-')[0]);
        let month = parseInt(element.Date.split('-')[1]);
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);
        const allDaysInMonth = eachDayOfInterval({ start: startDate, end: endDate });
    
      const workdays = allDaysInMonth.filter(day => {
        const dayOfWeek = day.getDay(); // 0 (Sunday) to 6 (Saturday)
        return !isWeekend(dayOfWeek);
      });
      let seconds = 0
      if(workdays.length > 0){
        seconds = workdays.length*8*3600;
      }
      return seconds;
    }
    
}
const getTotalTime = (data) => {
  let totalTime = 0;
  data.forEach(element => {
    let tempTime = getGeneralTime(element);
    totalTime += timeStringToSeconds(tempTime);
  });
  return totalTime;
}