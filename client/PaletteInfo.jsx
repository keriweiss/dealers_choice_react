import React from 'react';

const PaletteInfo = ({ paletteInfo }) => {
  console.log(paletteInfo);
  return (
    <div id='paletteinfo'>
      <h2>Palette Info</h2>
      {paletteInfo.map((info) => {
        return (
          <div>
            <h3>{info.color.name}</h3>
            <p>% Total: {info.opacity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PaletteInfo;
