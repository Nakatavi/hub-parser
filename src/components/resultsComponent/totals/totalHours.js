import React from 'react';
import { getTotalHours } from '../../../services/dataHendler';

const TotalHours = ({totalHours}) => {

    return (
        <div className='total-hours'>
            <div>{totalHours} h</div>
            <div>Total time</div>
            <div>Perfect working time : 105%</div>
        </div>
    );
}

export default TotalHours;
