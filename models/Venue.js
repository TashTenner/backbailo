const mongoose = require('mongoose');

const { Schema } = mongoose;

const venueSchema = new Schema(
  {
    type: { type: String, default: 'Feature' },
    geometry: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: {
        type: [Number], // lng, lat
        required: true,
      },
    },
    properties: {
      name: { type: String, required: true },
      address: String,
      date: Date,
      frequency: { type: String, enum: ['once a week', 'twice a month', 'once a month'] },
      startTime: String,
      endTime: String,
      price: String,
      phoneNr: String,
      mail: String,
      website: String,
      creator: { type: String, enum: ['user', 'client', 'admin'], default: 'user' },
      status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
