import React, { useState } from 'react';

function GenderDropdown({ customGender, setCustomGender }) {
  const [gender, setGender] = useState('');


  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setCustomGender(e.target.value)


  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <label htmlFor="gender">Gender</label>
      <select id="gender" value={gender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      {gender === 'other' && (
        <div>
          <label htmlFor="customGender">Please specify:</label>
          <input
            type="text"
            id="customGender"
            value={customGender}
            onChange={(e) => setCustomGender(e.target.value)}
            placeholder="Enter your gender"
          />
        </div>
      )}
    </div>
  );
}

export default GenderDropdown;
