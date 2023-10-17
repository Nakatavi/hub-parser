import React, { useState } from "react";
import { secondsToTimeString, timeStringToSeconds, getGeneralTime } from '../services/timeCounting';
import CheckBoxSide from "./resultsComponent/checkBoxes/checkBoxSide";
import { getUniqueMembers, getUniqueProjects } from "../services/dataHendler";
import Graph from "./resultsComponent/graph";
import "../styles/results.css";
import ChoosMembers from "./resultsComponent/overview/choosMembers";
import ModalStart from "./resultsComponent/modals/modalStart";
import TotalContainer from "./resultsComponent/totals/totalContainer";


const Results = ({ data }) => {
  const [members, setMembers] = useState([]);
  const [project, setProjects] = useState([[],[],[]]);
  const [graphData, setGraphData] = useState(null);

  
  const hendledMembers = (member) => {
    if (members.includes(member)) {
      setMembers(members.filter((m) => m !== member));
    } else {
      setMembers([...members, member]);
    }
  };
  const handleGraphData = () =>{

  }

  return (
    <div className="result">
      <div className="result-checkbox">
        <CheckBoxSide uniqMembers ={getUniqueMembers(data)} hendledMembers={hendledMembers}/>
      </div>
      <div className="result-data">
          <ModalStart data={getUniqueProjects(data)} setProjects={setProjects}/>
          <div className="total">
            <div className="members">
              <ChoosMembers members = {members} handleGraphData ={handleGraphData}/>
            </div>
            <div>
              <TotalContainer data ={data} sets={project} members ={members} setGtaph={setGraphData}/>
            </div>
            <div className="result-graph">
              <Graph data={data}/>
            </div>
          </div> 
      </div>    
    </div>
  );
};
export default Results;
