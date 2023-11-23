import React from 'react';
import {getTotalText} from '../../../enums/timeType';
import {timeType} from '../../../enums/timeType';

const TotalHours = ({totalWorkTime, totalToWorkRelations, totalToBillRelations, type}) => {
    const totalWorkTimeClassName = `totalWorkTime ${(type == timeType.hardType || type == timeType.softType) ? 'specialStyle' : ''}`;

    return (
        <div className='total-hours'>
            <div className={totalWorkTimeClassName}>{totalWorkTime} h</div>            
                <div className='getTotalText'>{getTotalText(type).mainText}</div>
                <div className='line'></div>
                <div className='total-text'>
                <div>{getTotalText(type).toTotal} <span>{totalToWorkRelations} %</span> </div>
                    {getTotalText(type).bilable != null ? <div> {getTotalText(type).bilable} <span>{totalToBillRelations} %</span></div> : <></>}
            </div>
        </div>
    );
}

export default TotalHours;
