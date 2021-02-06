const express = require('express');
const router = express.Router();

// @route   GET /api/records
// @desc    Test
// @access  Public
router.get('/', (req, res) => {
  res.send('hi');
});

module.exports = router;
