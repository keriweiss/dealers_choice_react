const {
  Color,
  Brand,
  Colorgroup,
  Brand_offering,
  Palette,
} = require('../db/db');
const express = require('express');
const router = express.Router();

router.use(express.json());

router.get('/colors', async (req, res, next) => {
  try {
    res.send(await Color.findAll({ include: Brand }));
  } catch (err) {
    next(err);
  }
});

router.get('/palette', async (req, res, next) => {
  try {
    res.send(await Palette.findAll());
  } catch (err) {
    next(err);
  }
});

router.get('/palette/imgs', async (req, res, next) => {
  try {
    res.send(await Palette.findAll({ attributes: ['img'] }));
  } catch (err) {
    next(err);
  }
});

router.post('/palette', async (req, res, next) => {
  try {
    const { opacity, colorId, img } = req.body;
    const swatch = Palette.create({ opacity, colorId, img });
    res.send(swatch);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
