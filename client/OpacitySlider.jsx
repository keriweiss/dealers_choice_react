import React from 'react';

const OpacitySlider = ({ changeOpacity }) => {
  const opa = document.getElementById('opaSlider');
  return (
    <input
      type='range'
      min='1'
      max='100'
      className='slider'
      id='opaSlider'
      onChange={() => changeOpacity(opa.value)}
    ></input>
  );
};

export default OpacitySlider;
