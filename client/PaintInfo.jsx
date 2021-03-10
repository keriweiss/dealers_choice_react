import React from 'react';

const PaintInfo = ({ paintInfo }) => {
  const { name, brands, pigment } = paintInfo;
  // const { location, url, brand_offering } = brands;
  // const brandName = brands.name;
  return (
    <div id='paintinfo'>
      <p>Name: {name}</p>
      <p>Pigment: {pigment}</p>
      {brands.map((brand) => {
        return (
          <div key={brand.name}>
            <p>
              <a href={brand.url}>{brand.name}</a>
            </p>
            <p>{brand.location}</p>
            <p>{brand.brand_offering.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PaintInfo;
