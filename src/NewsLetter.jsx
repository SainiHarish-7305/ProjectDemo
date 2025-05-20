import React, { useState } from 'react';

function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span>{isChecked ? 'Checked' : 'Unchecked'}</span>
      </label>
    </div>
  );
}

export default CheckboxComponent;