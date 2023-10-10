import React, { useEffect, useState } from "react";
import{secondsToTimeString, timeStringToSeconds,getGeneralTime} from '../services/timeCounting'


const Results = ({ data }) => {
    const [totalTime, setTotalTime] = useState(0);
    let time =[];
    let seconds = 0
    

    const calculateGeneralTime =() =>{
      data.map((obj) => {        
        time.push(getGeneralTime(obj));
      }) 
      time.map(el => {
        seconds += timeStringToSeconds(el);
      })
      return secondsToTimeString(seconds);
    }

    useEffect(() => {
      data.map((obj) => {        
        time.push(getGeneralTime(obj));
      }) 
      time.map(el => {
        seconds += timeStringToSeconds(el);
      })
    })
    

    
  return (
    <div>
      <div>
        {calculateGeneralTime()}
      </div>
    </div>
  );
};

export default Results;
