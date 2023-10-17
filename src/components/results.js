import React, { useEffect, useRef, useState } from "react";
import { secondsToTimeString, timeStringToSeconds, getGeneralTime } from '../services/timeCounting';
import CheckBoxSide from "./resultsComponent/checkBoxSide";
import { getUniqueMembers } from "../services/dataHendler";
import Graph from "./resultsComponent/graph";
import "../styles/results.css";


const Results = ({ data }) => {
  const [totalTime, setTotalTime] = useState(0);

  const calculateTotalTime = () => {
    let seconds = 0;
    if (Array.isArray(data)) {
      data.forEach((obj) => {
        seconds += timeStringToSeconds(getGeneralTime(obj));
      });
    }
    setTotalTime(secondsToTimeString(seconds));
  };

  useEffect(() => {
    if (data) {
      calculateTotalTime();
    }
    
  }, [data]);

  let uniqMembers = getUniqueMembers(data);

  return (
    <div className="result">
      <div className="result-checkbox">
        <CheckBoxSide uniqMembers ={uniqMembers}/>
      </div>
      <div className="result-graph">
      <Graph data={data}/>
      </div>
      
      
      
    </div>
  );
};

export default Results;
