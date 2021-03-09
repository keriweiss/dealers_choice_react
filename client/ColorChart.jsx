import React from 'react';

const ColorChart = ({ colors, addColor }) => {
  return (
    <div id='colors_container'>
      {colors.map((color) => {
        return (
          <div className='color' key={color.id}>
            <button id='addToPalette'>+</button>
            <img
              id='colorimage'
              src={color.swatch}
              onClick={() => {
                addColor(color.id, color.swatch);
              }}
            />
            <p>{color.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ColorChart;
