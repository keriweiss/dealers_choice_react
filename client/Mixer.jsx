import React from 'react';

const Mixer = ({ swatches }) => {
  return (
    <div id='mixer'>
      {swatches.map((swatch, idx) => {
        return (
          <img
            key={idx}
            src={swatch.img}
            style={{ opacity: `${swatch.opacity}%` }}
            className={idx === 0 ? 'firstswatch' : 'paletteswatch'}
          />
        );
      })}
    </div>
  );
};

export default Mixer;
