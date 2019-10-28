const express = require('express');
const School = require('../models/School');

const router = express.Router();

/* GET list of all schools */
router.get('/', async (req, res, next) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    next(error);
  }
});

router.get('/:schoolId', async (req, res, next) => {
  const { schoolId } = req.params;
  try {
    const school = await School.findById(schoolId);
    if (school) {
      res.json(school);
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
    contact: {
      phoneNr, mail, website,
      nameOrganizer,
    },
    mainPhoto, morePhotos, rating, followers,
  } = req.body;
  try {
    const school = await School.create({
      name,
      address: {
        street, number, additionalInfo, postcode, city, country,
      },
      coordinates: { lat, lng },
      dayOfWeek,
      type,
      contact: {
        phoneNr,
        mail,
        website,
        nameOrganizer,
      },
      mainPhoto,
      morePhotos,
      rating,
      followers,
    });
    res.json(school);
  } catch (error) {
    next(error);
  }
});

router.put('/:schoolId', async (req, res, next) => {
  const { schoolId } = req.params;
  const {
    name,
    address: {
      street, number, additionalInfo, postcode, city, country,
    },
    coordinates: { lat, lng },
    dayOfWeek,
    type,
    contact: {
      phoneNr, mail, website,
      nameOrganizer,
    },
    mainPhoto, morePhotos, rating, followers,
  } = req.body;
  try {
    const school = await School.findByIdAndUpdate(schoolId, {
      name,
      address: {
        street, number, additionalInfo, postcode, city, country,
      },
      coordinates: { lat, lng },
      dayOfWeek,
      type,
      contact: {
        phoneNr,
        mail,
        website,
        nameOrganizer,
      },
      mainPhoto,
      morePhotos,
      rating,
      followers,
    });
    res.json(school);
  } catch (error) {
    next(error);
  }
});

router.delete('/:schoolId', async (req, res, next) => {
  const { schoolId } = req.params;
  try {
    const school = await School.findByIdAndDelete(schoolId);
    res.json(school);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
