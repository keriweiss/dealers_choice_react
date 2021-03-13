import React from 'react';

const ColorGroupSelect = ({ colorGroup }) => {
  const selectGroup = document.getElementById('selectGroup');
  return (
    <div>
      Color Groups:
      <select
        id='selectGroup'
        onChange={() => {
          colorGroup(selectGroup.value);
        }}
      >
        <option>Select Color Group</option>
        <option>Blue</option>
        <option>Earth Tones</option>
        <option>Yellow</option>
        <option>Red</option>
        <option>Violet</option>
        <option>Green</option>
        <option>White</option>
      </select>
    </div>
  );
};

export default ColorGroupSelect;
