const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  users: [
    {
      name: {
        type: String,
      },
    },
  ],

  company: {
    type: String,
    required: true,
  },
  companyfullname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cellno: [
    {
      personal: {
        type: String,
      },
      work: {
        type: String,
      },
    },
  ],
  address: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
