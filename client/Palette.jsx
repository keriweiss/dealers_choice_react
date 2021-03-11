import React from 'react';
import OpacitySlider from './OpacitySlider.jsx';
import Mixer from './Mixer.jsx';
import PaletteSwatches from './PaletteSwatches.jsx';

const Palette = ({
  swatches,
  deleteColor,
  resetPalette,
  getPaletteInfo,
  changeOpacity,
  selectColor,
  selectedColor,
}) => {
  const opa = document.getElementById('opaSlider');
  return (
    <div id='palette'>
      <h1>Palette</h1>
      <p className='button' id='reset' onClick={() => resetPalette()}>
        Reset
      </p>
      <p className='button' id='paletteInfo' onClick={() => getPaletteInfo()}>
        Get Palette Info
      </p>
      <p className='instructions'>Click on paint swatch to change opacity.</p>
      <OpacitySlider changeOpacity={changeOpacity} />
      <PaletteSwatches
        swatches={swatches}
        selectedColor={selectedColor}
        deleteColor={deleteColor}
        selectColor={selectColor}
      />
      <Mixer swatches={swatches} />
    </div>
  );
};

export default Palette;
