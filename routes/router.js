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
    res.send(await Palette.findAll({ include: Color }));
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

router.put('/palette/:id', async (req, res, next) => {
  try {
    const opacityToUpdate = await Palette.findByPk(req.params.id);
    const { opacity } = req.body;
    console.log(opacity);
    opacityToUpdate.update({ opacity });
    res.status(200).send(opacityToUpdate);
  } catch (err) {
    next(err);
  }
});

router.post('/palette', async (req, res, next) => {
  try {
    const { opacity, colorId, img } = req.body;
    const swatch = await Palette.create({ opacity, colorId, img });
    res.send(swatch);
  } catch (err) {
    next(err);
  }
});

router.delete('/palette/:id', async (req, res, next) => {
  try {
    const colorToDelete = await Palette.findByPk(req.params.id);
    await colorToDelete.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.delete('/palette', async (req, res, next) => {
  try {
    const palette = await Palette.findAll();
    await Palette.destroy({ where: {}, truncate: true });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
