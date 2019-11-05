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
      // mapOption: { type: String, enum: ['milonga', 'practica'], required: true },
      date: Date,
      frequency: { type: String, enum: ['once a week', 'twice a month', 'once a month'] },
      startTime: String,
      endTime: String,
      price: String,
      phoneNr: String,
      mail: String,
      website: String,
      // nameOrganizer: String,
      // mainPhoto: String,
      // morePhotos: [String],
      // rating: Number,
      creator: { type: String, enum: ['user', 'client', 'admin'], default: 'admin' },
      status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
      // followers: [String],
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
