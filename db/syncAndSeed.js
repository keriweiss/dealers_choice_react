const { db, Color, Brand, Colorgroup, Brand_offering } = require('./db');
const { colors } = require('./color');
const { brands } = require('./brand');
const { colorgroups } = require('./colorgroup');
const { brandOffers } = require('./brand_offering');

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      brands.map(({ id, name, location, url }) =>
        Brand.create({ id, name, location, url })
      )
    );
    await Promise.all(
      colorgroups.map(({ id, name }) => Colorgroup.create({ id, name }))
    );
    await Promise.all(
      colors.map(({ id, name, pigment, swatch, colorgroupId }) =>
        Color.create({
          id,
          name,
          pigment,
          swatch,
          colorgroupId,
        })
      )
    );
    await Promise.all(
      brandOffers.map(({ price, brandId, colorId }) =>
        Brand_offering.create({ price, brandId, colorId })
      )
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { syncAndSeed };
