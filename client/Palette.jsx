import React from 'react';

const Palette = ({ swatches }) => {
  return (
    <div id='palette'>
      <h1>Palette</h1>
      <div id='swatches'>
        {swatches.map((swatch, idx) => {
          return (
            <p className='swatch' key={idx}>
              <img src={swatch} />
            </p>
          );
        })}
      </div>
      <div id='mixer'>
        {swatches.map((swatch, idx) => {
          return (
            <img
              key={idx}
              src={swatch}
              style={idx === 0 ? { opacity: '100%' } : { opacity: '50%' }}
              className={idx === 0 ? 'firstswatch' : 'paletteswatch'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Palette;
