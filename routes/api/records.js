const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const Record = require('../../models/Record');
const mongoose = require('mongoose');

// @route   POST /api/records
// @desc    Save user's new record
// @access  Private
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

// @route   GET /api/records
// @desc    Get user's records
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    let records = await Record.find({ user: req.user.id });

    if (!records) {
      res.status(404).json({ msg: 'No ad found...' });
    }

    res.json(records);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'No ad found' });
    }
    res.status(500).send('Server error...');
  }
});

// @route   PUT /api/records/step2/:recordId
// @desc    Update record, add step2
// @access  Private
router.put('/step2/:recordId', auth, async (req, res) => {
  try {
    let record = await Record.findById(req.params.recordId);

    if (!record) {
      res.status(404).json({ msg: 'No ad found' });
    }

    const { detectedFault, price, status } = req.body;

    var now = new Date();

    let step2Fields = {};
    step2Fields.detectedFault = detectedFault;
    step2Fields.price = price;
    step2Fields.status = status;
    step2Fields.date = now;

    record = await Record.findByIdAndUpdate(
      {
        _id: req.params.recordId,
      },
      {
        $set: { step2: step2Fields },
      },
      { new: true }
    );

    res.json(record);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'No ad found' });
    }
    res.status(500).send('Server error...');
  }
});

// @route   PUT /api/records/step3/:recordId
// @desc    Update record, add step2
// @access  Private
router.put('/step3/:recordId', auth, async (req, res) => {
  try {
    let record = await Record.findById(req.params.recordId);

    if (!record) {
      res.status(404).json({ msg: 'No ad found' });
    }

    const { status, reason } = req.body;
    var now = new Date();
    let step3Fields = {};
    step3Fields.status = status;
    if (reason) step3Fields.reason = reason;
    step3Fields.date = now;

    record = await Record.findByIdAndUpdate(
      {
        _id: req.params.recordId,
      },
      {
        $set: { step3: step3Fields },
      },
      {
        new: true,
      }
    );

    res.json(record);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'No ad found' });
    }
    res.status(500).send('Server error...');
  }
});

router.delete('/:recordId', auth, async (req, res) => {
  try {
    let record = await Record.findById(req.params.recordId);

    if (!record) {
      res.status(404).json({ msg: 'No ad found' });
    }

    await Record.findOneAndRemove({ _id: req.params.recordId });
    let records = await Record.find({ user: req.user.id });
    res.json(records);
  } catch (err) {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'No ad found' });
    }
    res.status(500).send('Server error...');
  }
});
module.exports = router;
