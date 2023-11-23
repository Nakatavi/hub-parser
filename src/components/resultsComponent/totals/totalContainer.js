import React, { useEffect, useState } from 'react';
import TotalHours from './totalHours';
import { getTotalHours } from '../../../services/dataHendler';
import "../../../styles/total.css";

const TotalContainer = ({data, projects,members,vacations}) => {

    const [totalHours,setTotalHours] = useState(null);
    // const [billableHours,setBillableHours] = useState(0);
    // const [unbillableHours,setUnbillableHours] = useState(0);
    // console.log(data);
    //   console.log('data');
    //   console.log(projects);
    //   console.log('projects');
    //   console.log(members);
    //   console.log('members');
    //   console.log(vacations);
    //   console.log('vacations');
    useEffect(() => {
      console.log('data');
      console.log(data);
      console.log('projects');
      console.log(projects);
      console.log('members');
      console.log(members);
      console.log('vacations');
      console.log(vacations);
      
      const calculateTotalHours = async () => {
          const totalHours = getTotalHours({ data,projects, members, vacations });
          setTotalHours(totalHours);
          // You can similarly calculate and set billableHours and unbillableHours here if needed.
      };

      calculateTotalHours();
  }, [data, members, vacations]);
    getTotalHours({data, projects,members,vacations});
    
    return (
      <div className="total-container">        
        <TotalHours totalHours={totalHours} />
        <TotalHours totalHours={totalHours} />
        <TotalHours totalHours={totalHours} />
      </div>
    );
}

export default TotalContainer;
