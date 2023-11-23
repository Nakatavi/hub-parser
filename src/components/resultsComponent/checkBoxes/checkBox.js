import React, { useEffect, useState } from 'react';

const CheckBox = ({ name,  checked, onChange }) => {
  
  const [vacation, setVacation] = useState(0);
  const [nameState, setName] = useState(name);

  const handleNumberChange = (event) => {
    let vacations = parseInt(event.target.value, 10);
    setVacation(vacations);
    setName({...nameState, vacation: vacations, isChecked: !name.isChecked})
  };

  const handleCheckboxChange = () => {
    onChange({ ...nameState, isChecked: checked });
  };
    return (
      <div>        
        <input
          type="checkbox"
          name={nameState.Member}
          onChange={handleCheckboxChange}
        />
        {nameState.Member}
        <select  value={vacation} onChange={handleNumberChange}>
        {[...Array(26).keys()].map(number => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      </div>
    );
  };
  export default CheckBox;