import React, { useState } from 'react';
import '../../../styles/vacations.css'

const Vacations = ({handleVacations}) => {
    const [vacations, setVacations] = useState(0)
    const handleNumberChange = (event) =>{
        let vacation = parseInt(event.target.value, 10);
        setVacations(vacation);
        handleVacations(vacation);
    }
    return (
        <div className='vacations'>
            <h2>Apiko Softwate OU</h2>
            <select  value={vacations} onChange={handleNumberChange}>
        {[...Array(26).keys()].map(number => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
        </div>
    );
}

export default Vacations;
