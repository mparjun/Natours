const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'must have duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'must have group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'must have difficulty'],
  },
  ratingsQuantity: {
    type: Number,
    default: 4.5,
  },
  raitingsQuantity: {
    type: Number,
    default: 0,
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'musthave a coverimage'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
