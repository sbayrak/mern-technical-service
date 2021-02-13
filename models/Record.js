const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  customername: {
    type: String,
    required: true,
  },
  customerphone: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  modelno: {
    type: String,
    required: true,
  },
  physicaldamage: {
    type: String,
  },
  accessories: {
    type: String,
    required: true,
  },
  not: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
  technician: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  step2: {
    detectedFault: {
      type: String,
    },
    price: {
      type: String,
    },
    status: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  step3: {
    status: {
      type: String,
    },
    reason: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
});

const Record = mongoose.model('record', RecordSchema);

module.exports = Record;
