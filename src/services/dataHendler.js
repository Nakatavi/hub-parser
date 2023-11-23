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
  
  console.log('finish data : '+data);
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
    const billableProjects = projects[1];
    console.log('members'); 
    console.log(members); 
    
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
      console.log('filteredData');
      console.log(filteredData);
      filteredData.forEach(element => {
        let tempTime = getGeneralTime(element)
        seconds += timeStringToSeconds(tempTime);
        if(element.selectedNumber>0){
            seconds+=3600*8*element.vacation;
        }
        if(vacations>0){
            seconds+=3600*8*vacations;
        }
      });      
      // const billaleData = filteredData.filter(f => )
      const workTime = countMonthTime(filteredData[0])
      let totalTime = ((seconds/members.length)/(workTime/100)).toFixed(2);
      const billableData = filteredData.filter(b => [...projects[1]].includes(b.Project));
      const unBillableData = filteredData.filter(b => [...projects[2]].includes(b.Project));
      console.log('billableData');
      console.log(billableData);
      console.log('unBillableData');
      console.log(unBillableData);
      console.log('total');
      console.log(totalTime);
      console.log('seconds');
      console.log(secondsToTimeString(seconds));
      console.log('projects');
      console.log(projects);


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