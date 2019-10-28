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

module.exports = router;
