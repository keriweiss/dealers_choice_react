import React from 'react';

const PaintInfo = ({ paintInfo }) => {
  const { name, brands, pigment } = paintInfo;
  return (
    <div id='paintinfo'>
      <p>Name: {name}</p>
      <p>Pigment: {pigment}</p>
      Available at:
      {brands.map((brand) => {
        return (
          <div key={brand.name} className='brand'>
            <ul>
              <a href={brand.url}>{brand.name}</a>
            </ul>
            <ul>{brand.location}</ul>
            <ul>{brand.brand_offering.price}</ul>
          </div>
        );
      })}
    </div>
  );
};

export default PaintInfo;
