const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const { route } = require('./auth');
require('dotenv').config();

// @route   POST /api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    body('company', 'Company name is required').not().isEmpty(),
    body('companyfullname', 'Company name is required').not().isEmpty(),
    body('password', 'Password is required').isLength({ min: 6 }),
    body('email', 'E-Mail is required').not().isEmpty(),
    body('address', 'Address is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See if user exists
    // Encrypt password
    // Return jwt

    const { company, companyfullname, password, email, address } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        company,
        email,
        companyfullname,
        password,
        address,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET_KEY,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  }
);

// @route   PUT /api/users/add-technician
// @desc    Add technician
// @access  Private
router.put('/add-technician', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);

    const { technician } = req.body;
    let newTechnician = {};
    newTechnician.name = technician;

    user.users.push(newTechnician);

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});

// @route   PUT /api/users/remove-technician
// @desc    remove technician
// @access  Private
router.put('/remove-technician/:techId', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    let technicians = user.users;

    const newTechnicians = technicians.filter(
      (tech) => tech.id !== req.params.techId
    );

    user.users = newTechnicians;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error...');
  }
});
module.exports = router;
