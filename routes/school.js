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

module.exports = router;
