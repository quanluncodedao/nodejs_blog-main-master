const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: 'meomeo', maxLength: 255},
    discription: { type: String, default: 'hehe', maxLength: 900},
    image: {type: String, maxLength: 255},
    CreatedAt: {type: Date, default: Date.now},
    UpdatedAt: { type: Date, default: Date.now},
  });

  module.exports = mongoose.model('Course', Course);