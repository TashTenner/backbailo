const express = require('express');
const Venue = require('../models/Venue');

const router = express.Router();

const {
  // checkUsernameAndPasswordNotEmpty,
  checkIfLoggedIn,
} = require('../middlewares/index');

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

router.post('/new', checkIfLoggedIn, async (req, res, next) => {
  try {
    const venue = await Venue.create(req.body);
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.put('/:venueId/edit', checkIfLoggedIn, async (req, res, next) => {
  const { venueId } = req.params;
  try {
    const venue = await Venue.findByIdAndUpdate(venueId, req.body, { new: true });
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.delete('/:venueId/delete', checkIfLoggedIn, async (req, res, next) => {
  const { venueId } = req.params;
  try {
    const venue = await Venue.findByIdAndDelete(venueId);
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
