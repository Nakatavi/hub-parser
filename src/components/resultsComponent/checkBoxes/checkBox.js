import React, { useEffect, useState } from 'react';

const CheckBox = ({ name,  checked, onChange }) => {
  
  const [vacation, setVacation] = useState(0);

  const handleNumberChange = (event) => {
    let vacations = parseInt(event.target.value, 10);
    setVacation(vacations);
    onChange({ ...name, vacation: vacations, isChecked: !name.isChecked });
  };

  const handleCheckboxChange = () => {
    onChange({ ...name, vacation, isChecked: checked });
  };
    return (
      <div>        
        <input
          type="checkbox"
          name={name.Member}
          // checked={checked}
          onChange={handleCheckboxChange}
        />
        {name.Member}
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