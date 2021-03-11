import React from 'react';

const PaletteSwatches = ({
  swatches,
  selectedColor,
  deleteColor,
  selectColor,
}) => {
  const opa = document.getElementById('opaSlider');
  return (
    <div id='swatches'>
      {swatches.map((swatch, idx) => {
        const isSelected = selectedColor.id === swatch.id;
        return (
          <div key={swatch.createdAt}>
            <button id='deletecolor' onClick={() => deleteColor(swatch.id)}>
              x
            </button>
            <img
              src={swatch.img}
              className={isSelected ? 'selected' : 'swatch'}
              onClick={() => {
                opa.value = swatch.opacity;
                selectColor(swatch);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PaletteSwatches;
