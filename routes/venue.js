const express = require('express');
const Venue = require('../models/Venue');

const router = express.Router();

/* GET list of all venues */
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

module.exports = router;
