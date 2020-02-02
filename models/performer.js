const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const performerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Performer', performerSchema);