const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/color_mixer'
);

const Color = db.define('color', {
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  pigment: {
    type: DataTypes.STRING(50),
  },
  swatch: {
    type: DataTypes.STRING,
    defaultValue: 'default-swatch.jpg',
  },
});

const Brand = db.define('brand', {
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
    unique: true,
  },
});

const Colorgroup = db.define('colorgroup', {
  id: {
    type: DataTypes.STRING(30),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
});

const Palette = db.define('palette', {});

const Brand_offering = db.define('brand_offering', {
  price: { type: DataTypes.DECIMAL(10, 2) },
});

Colorgroup.hasMany(Color);
Color.belongsTo(Colorgroup);

Brand.belongsToMany(Color, { through: Brand_offering });
Color.belongsToMany(Brand, { through: Brand_offering });

Palette.belongsTo(Color);

module.exports = {
  db,
  Color,
  Brand,
  Colorgroup,
  Palette,
  Brand_offering,
};
