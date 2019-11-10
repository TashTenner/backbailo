const express = require('express');
const School = require('../models/School');

const router = express.Router();

const {
  // checkUsernameAndPasswordNotEmpty,
  checkIfLoggedIn,
} = require('../middlewares/index');

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

router.post('/new', checkIfLoggedIn, async (req, res, next) => {
  try {
    const school = await School.create(req.body);
    res.json(school);
  } catch (error) {
    next(error);
  }
});

router.put('/:schoolId/edit', checkIfLoggedIn, async (req, res, next) => {
  const { schoolId } = req.params;
  try {
    const school = await School.findByIdAndUpdate(schoolId, req.body, { new: true });
    res.json(school);
  } catch (error) {
    next(error);
  }
});

router.delete('/:schoolId/delete', checkIfLoggedIn, async (req, res, next) => {
  const { schoolId } = req.params;
  try {
    const school = await School.findByIdAndDelete(schoolId);
    res.json(school);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
