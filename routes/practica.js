const express = require('express');
const Practica = require('../models/Practica');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const practicas = await Practica.find();
    res.json(practicas);
  } catch (error) {
    next(error);
  }
});

router.get('/:practicaId', async (req, res, next) => {
  const { practicaId } = req.params;
  try {
    const practica = await Practica.findById(practicaId);
    if (practica) {
      res.json(practica);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

router.post('/new', async (req, res, next) => {
  try {
    const practica = await Practica.create(req.body);
    res.json(practica);
  } catch (error) {
    next(error);
  }
});

router.put('/:practicaId/edit', async (req, res, next) => {
  const { practicaId } = req.params;
  try {
    const practica = await Practica.findByIdAndUpdate(practicaId, req.body, { new: true });
    res.json(practica);
  } catch (error) {
    next(error);
  }
});

router.delete('/:practicaId/delete', async (req, res, next) => {
  const { practicaId } = req.params;
  try {
    const practica = await Practica.findByIdAndDelete(practicaId);
    res.json(practica);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
