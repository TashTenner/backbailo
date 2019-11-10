const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json(user);
    } else {
      res.json({});
    }
  } catch (error) {
    next(error);
  }
});

router.put('/:userId/edit', async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
