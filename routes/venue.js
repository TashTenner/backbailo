const express = require('express');
const Venue = require('../models/Venue');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    next(error);
  }
});

router.get('/:venueId', async (req, res, next) => {
  const { venueId } = req.params;
  try {
    const venue = await Venue.findById(venueId);
    if (venue) {
      res.json(venue);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

router.post('/new', async (req, res, next) => {
  try {
    const venue = await Venue.create(req.body);
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.put('/:venueId/edit', async (req, res, next) => {
  const { venueId } = req.params;
  try {
    const venue = await Venue.findByIdAndUpdate(venueId, req.body, { new: true });
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.delete('/:venueId/delete', async (req, res, next) => {
  const { venueId } = req.params;
  try {
    const venue = await Venue.findByIdAndDelete(venueId);
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
