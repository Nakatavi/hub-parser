import React, { useEffect, useState } from "react";
import Header from '../components/header/header';
import CheckBoxSide from "./resultsComponent/checkBoxes/checkBoxSide";
import { getUniqueMembers, getUniqueProjects, handleData } from "../services/dataHendler";
import Graph from "./resultsComponent/graph";
import "../styles/results.css";
import ChoosMembers from "./resultsComponent/overview/choosMembers";
import ModalStart from "./resultsComponent/modals/modalStart";
import TotalContainer from "./resultsComponent/totals/totalContainer";
import Vacations from "./resultsComponent/vacations/vacations";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

const Results = ({ data }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [project, setProjects] = useState([[],[],[]]);
  const [graphData, setGraphData] = useState(null);
  const [dataState,setData] = useState(data);
  const [vacations, setVacations] = useState(0);
  
  useEffect(() => {
    console.log("Checking authentication status");
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to login");
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      setData(handleData(data));
    }
  }, [isAuthenticated, data]);

  const handleBack = () => navigate('/');
  
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
  const handleGraphData = () => {
  };
  return (
    isAuthenticated && (
    <div>
      <Header onBackButtonClick={handleBack} />
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
                <TotalContainer data ={dataState} projects={project} members ={members} vacations = {vacations}/>
              <div className="result-graph">
                <Graph data={dataState} members ={members}/>
              </div>
            </div> 
        </div>    
      </div>
    </div>
    )
  );
};

export default Results;
