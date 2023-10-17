import React, { useEffect } from 'react';

const CheckBox = ({ name, checked, onChange }) => {
    return (
      <div>        
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {name}
      </div>
    );
  };
  export default CheckBox;