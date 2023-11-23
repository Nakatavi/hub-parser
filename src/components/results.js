import React, { useEffect, useState } from "react";
import CheckBoxSide from "./resultsComponent/checkBoxes/checkBoxSide";
import {getUniqueMembers, getUniqueProjects, handleData } from "../services/dataHendler";
import Graph from "./resultsComponent/graph";
import "../styles/results.css";
import ChoosMembers from "./resultsComponent/overview/choosMembers";
import ModalStart from "./resultsComponent/modals/modalStart";
import TotalContainer from "./resultsComponent/totals/totalContainer";
import Vacations from "./resultsComponent/vacations/vacations";


const Results = ({ data }) => {
  const [members, setMembers] = useState([]);
  const [project, setProjects] = useState([[],[],[]]);
  const [graphData, setGraphData] = useState(null);
  const [dataState,setData] = useState(data);
  const [vacations, setVacations] = useState(0);

  
  const hendledMembers = (member) => {
      const existingMember = members.find(m => (m.Member === member.Member))
      if(existingMember ){
        if(member.isChecked && existingMember.selectedNumber !== member.selectedNumber){
          const newMembers = members.filter(el => el.Member !== member.Member);
          setMembers([...newMembers,member]);
        }
        if(!member.isChecked){
          const newMembers = members.filter(el => el.Member !== member.Member);
          setMembers([...newMembers]);        
      }}else{
        setMembers([...members,member]);
      }            
    };
  const handleVacations = (vacation) => {
    setVacations(vacation);    
  };
  const handleGraphData = () =>{
  }
  useEffect(()=>{
    setData(handleData(data));
  },[data]);

  return (
    <div className="result">
      <div className="result-checkbox">
        <CheckBoxSide uniqMembers ={getUniqueMembers(data)} hendledMembers={hendledMembers}/>
      </div>
      <div className="result-data">
        <div className="cooseSector">
          <Vacations handleVacations ={handleVacations}/>
          <ModalStart data={getUniqueProjects(dataState)} setProjects={setProjects}/>
        </div>
          
          <div className="total">
            <div className="members">
              <ChoosMembers members = {members} handleGraphData ={handleGraphData}/>
            </div>
              <TotalContainer data ={dataState} projects={project} members ={members} vacations = {vacations} setGraph={setGraphData}/>
            <div className="result-graph">
              <Graph data={data}/>
            </div>
          </div> 
      </div>    
    </div>
  );
};
export default Results;
