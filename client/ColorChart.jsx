import React from 'react';

const ColorChart = ({ colors, addColor, colorInfo }) => {
  return (
    <div id='colors_container'>
      {colors.map((color) => {
        return (
          <div className='color' key={color.id}>
            <p
              className='button'
              id='addToPalette'
              onClick={() => {
                console.log(color);
                colorInfo(color);
              }}
            >
              info
            </p>
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
