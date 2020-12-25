const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  src: {
    type: String,
    min: 5,
    max: 1024,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    max: 1000000000,
    required: true,
  },
  name: {
    type: String,
    min: 0,
    max: 1024,
    required: true,
  },
});

module.exports = mongoose.model('product', productSchema);
