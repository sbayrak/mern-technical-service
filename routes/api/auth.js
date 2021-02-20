const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');

// @route   GET /api/auth
// @desc    verify token and return user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// @route   POST /api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
  '/',
  [
    body('password', 'Please do not leave it blank').exists(),
    body('email', 'Please do not leave it blank').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // See if user exists
    // Encrypt password
    // Return jwt

    const { password, email } = req.body;

    if (!email && !password) {
      res.status(400).json({ msg: 'Please enter both fields' });
    }

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid credentials' }] });
      }

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

module.exports = router;
