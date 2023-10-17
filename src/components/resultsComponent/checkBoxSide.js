import React, { useEffect } from 'react';
import CheckBox from './checkBox';

const CheckBoxSide = ({ uniqMembers }) => {
    // useEffect(() => {
    //     console.log(uniqMembers);
    // }, [uniqMembers]);

    return (
        <div className='checkBoxSide'>
            <div>
                {uniqMembers.map((el, index) => (
                    <CheckBox key={index} name={el.Member} />
                ))}
            </div>
            
        </div>
    );
};

export default CheckBoxSide;
