
export const timeStringToSeconds = (timeString) => {
    if(timeString != null){
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    }
    return 0;
}

export const secondsToTimeString = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export const getGeneralTime = (obj)=>{
    let time =null
     Object.keys(obj).map((key) => {
      if(key === 'Time'){
        time=obj[key];
      }        
    })
    return time;
};