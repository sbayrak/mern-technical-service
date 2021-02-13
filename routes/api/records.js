const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Record = require('../../models/Record');

// @route   POST /api/records
// @desc    Save user's new record
// @access  Public
router.post('/', auth, async (req, res) => {
  const {
    customername,
    customerphone,
    type,
    brand,
    modelno,
    physicaldamage,
    accessories,
    not,
    complaint,
    technician,
  } = req.body;

  let recordFields = {};
  recordFields.user = req.user.id;
  recordFields.customername = customername;
  recordFields.customerphone = customerphone;
  recordFields.type = type;
  recordFields.brand = brand;
  recordFields.modelno = modelno;
  recordFields.physicaldamage = physicaldamage;
  recordFields.accessories = accessories;
  recordFields.technician = technician;
  recordFields.complaint = complaint;
  recordFields.not = not;
  recordFields.step2 = {};
  recordFields.step3 = {};

  try {
    let user = await User.findById(req.user.id);
    recordFields.company = user.company;
    recordFields.status = '0';

    let record = new Record(recordFields);
    await record.save();

    res.json(record);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error...');
  }
});

module.exports = router;
