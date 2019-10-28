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

router.post('/', async (req, res, next) => {
  const {
    name,
    address: {
      street, number, additionalInfo, postcode, city, country,
    },
    coordinates: { lat, lng },
    dayOfWeek,
    type,
    date: { dStart, dFinish },
    time: { tStart, tFinish },
    price: { num, currency },
    contact: {
      phoneNr, mail, website,
      nameOrganizer,
    },
    frequency, mainPhoto, morePhotos, rating, followers,
  } = req.body;
  try {
    const venue = await Venue.create({
      name,
      address: {
        street, number, additionalInfo, postcode, city, country,
      },
      coordinates: { lat, lng },
      dayOfWeek,
      type,
      date: { dStart, dFinish },
      time: { tStart, tFinish },
      price: { num, currency },
      contact: {
        phoneNr,
        mail,
        website,
        nameOrganizer,
      },
      frequency,
      mainPhoto,
      morePhotos,
      rating,
      followers,
    });
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.put('/:venueId', async (req, res, next) => {
  const { venueId } = req.params;
  const {
    name,
    address: {
      street, number, additionalInfo, postcode, city, country,
    },
    coordinates: { lat, lng },
    dayOfWeek,
    type,
    date: { dStart, dFinish },
    time: { tStart, tFinish },
    price: { num, currency },
    contact: {
      phoneNr, mail, website,
      nameOrganizer,
    },
    frequency, mainPhoto, morePhotos, rating, followers,
  } = req.body;
  try {
    const venue = await Venue.findByIdAndUpdate(venueId, {
      name,
      address: {
        street, number, additionalInfo, postcode, city, country,
      },
      coordinates: { lat, lng },
      dayOfWeek,
      type,
      date: { dStart, dFinish },
      time: { tStart, tFinish },
      price: { num, currency },
      contact: {
        phoneNr,
        mail,
        website,
        nameOrganizer,
      },
      frequency,
      mainPhoto,
      morePhotos,
      rating,
      followers,
    });
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
