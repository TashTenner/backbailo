const mongoose = require('mongoose');

const { Schema } = mongoose;

const venueSchema = new Schema(
  {
    type: { type: String, enum: ['Feature'], required: true },
    geometry: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
      },
      coordinates: {
        type: [Number], // lng, lat
        required: true,
      },
    },
    properties: {
      name: { type: String, required: true },
      address: String,
      mapOption: { type: String, enum: ['milonga', 'practica'], required: true },
      date: Date,
      frequency: { type: String, enum: ['Once a week', 'Twice a month', 'Once a month'] },
      startTime: Date,
      endTime: Date,
      price: String,
      phoneNr: String,
      mail: String,
      website: String,
      nameOrganizer: String,
      mainPhoto: String,
      // morePhotos: [String],
      rating: Number,
      creator: { type: String, enum: ['user', 'client', 'admin'], required: true },
      status: { type: String, enum: ['pending', 'approved', 'rejected'], required: true },
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
