import React, { useEffect, useState } from 'react';
import TotalHours from './totalHours';
import { getTotalHours } from '../../../services/dataHendler';
import "../../../styles/total.css";
import {timeType} from '../../../enums/timeType';

const TotalContainer = ({data, projects,members,vacations}) => {
    
    const [totalHours,setTotalHours] = useState(null);
    useEffect(() => {
      let hoursData = getTotalHours({ data,projects, members, vacations });
          setTotalHours(hoursData);
    }, [data, members, vacations]);
    
    return (
      <div className="total-container">       
          <TotalHours totalWorkTime={totalHours && typeof totalHours.totalWorkTime === 'string' ? totalHours.totalWorkTime : 0} 
            totalToWorkRelations={totalHours && !isNaN(totalHours.totalToWorkRelations) ? totalHours.totalToWorkRelations : 0} type = {timeType.totalType}/>
            <TotalHours totalWorkTime={totalHours && typeof totalHours.totalWorkTime === 'string' ? totalHours?.unbillTotalTime : 0} 
              totalToWorkRelations={totalHours && !isNaN(totalHours.unbillToTotalRelation) ? totalHours.unbillToTotalRelation : 0} type = {timeType.unbillType}/>
        <div className="bilable-container">
          <TotalHours totalWorkTime={totalHours && typeof totalHours.totalWorkTime === 'string' ? totalHours.billTotalTime :0} 
            totalToWorkRelations={totalHours && !isNaN(totalHours.billToToalRelations) ? totalHours?.billToToalRelations : 0}  type = {timeType.billType}/>
          <TotalHours className = "internal-total" totalWorkTime={totalHours && typeof totalHours.totalWorkTime === 'string' ? totalHours?.hardBillTime : 0} 
            totalToWorkRelations={totalHours && !isNaN(totalHours.hardToTotalRelation) ? totalHours?.hardToTotalRelation : 0} 
            totalToBillRelations={totalHours && !isNaN(totalHours.hardToBillRelation) ? totalHours?.hardToBillRelation : 0} type = {timeType.hardType}/>
          <TotalHours className = "internal-total" totalWorkTime={totalHours && typeof totalHours.totalWorkTime === 'string' ? totalHours?.softBillTime : 0} 
            totalToWorkRelations={totalHours && !isNaN(totalHours.softToTotalRelation) ? totalHours?.softToTotalRelation : 0} 
            totalToBillRelations={totalHours && !isNaN(totalHours.softToBillRelation) ? totalHours?.softToBillRelation : 0} type = {timeType.softType}/>
        </div>
      </div>
    );
}

export default TotalContainer;
