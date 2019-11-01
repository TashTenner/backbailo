const express = require('express');
// const bodyParser = require('body-parser');
const Venue = require('../models/Venue');

const router = express.Router();

// // create application/json parser
// const jsonParser = bodyParser.json();
// // create application/x-www-form-urlencoded parser
// let urlencodedParser = bodyParser.urlencoded({ extended: false });


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
  console.log(req.body);
  // const {
  //   name,
  //   address: {
  //     street, number, additionalInfo, postcode, city, country,
  //   },
  //   coordinates: { lat, lng },
  //   dayOfWeek,
  //   type,
  //   date: { dStart, dFinish },
  //   time: { tStart, tFinish },
  //   price: { num, currency },
  //   contact: {
  //     phoneNr, mail, website,
  //     nameOrganizer,
  //   },
  //   frequency, mainPhoto, morePhotos, rating, followers,
  // } = req.body;
  try {
    const venue = await Venue.create(req.body);
    console.log(venue);
    res.json(venue);
  } catch (error) {
    next(error);
  }
});

router.put('/:venueId', async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
  console.log('req.body.properties.name:', req.body.properties.name);
  const { venueId } = req.params;
  const updatedVenue = {};
  console.log('updatedVenue.properties.name:', updatedVenue.properties.name);
  // updatedVenue.name = req.body.name;
  // updatedVenue.email = req.body.email;
  // updatedVenue.geometry.coordinates[0] = req.body.geometry.coordinates[0];
  updatedVenue.properties.name = req.body.properties.name;
  // updatedVenue.properties = {
  //   name: req.body.properties.name,
  //   address: req.body.properties.address,
  //   morePhotos: req.body.properties.morePhotos,
  //   followers: req.body.properties.followers,
  //   mapOption: req.body.properties.mapOption,
  //   date: req.body.properties.date,
  //   frequency: req.body.properties.frequency,
  //   startTime: req.body.properties.startTime,
  //   endTime: req.body.properties.endTime,
  //   price: req.body.properties.price,
  //   phoneNr: req.body.properties.phoneNr,
  //   mail: req.body.properties.mail,
  //   website: req.body.properties.website,
  //   nameOrganizer: req.body.properties.nameOrganizer,
  //   mainPhoto: req.body.properties.mainPhoto,
  //   rating: req.body.properties.rating,
  // };

  // const {
  //   geometry: { coordinates },
  //   // type: { Point },
  //   properties: {
  //     // eslint-disable-next-line max-len
  //     morePhotos, followers, name, address, mapOption, date, frequency, startTime, endTime, price, phoneNr, mail, website, nameOrganizer, mainPhoto, rating,
  //   },
  // } = req.body;
  try {
    const venue = await Venue.findByIdAndUpdate(venueId, updatedVenue, { new: true });
    //   {
    //   // eslint-disable-next-line max-len
    //   coordinates, morePhotos, followers, name, address, mapOption, date, frequency, startTime, endTime, price, phoneNr, mail, website, nameOrganizer, mainPhoto, rating,
    // }
    res.json(venue);
    // console.log('req.body.properties.name:', req.body.properties.name);
    // console.log('updatedVenue.properties.name:', updatedVenue.properties.name);
    // console.log('venue:', venue);
    // console.log('name:', name);
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
