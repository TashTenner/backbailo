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

module.exports = router;
