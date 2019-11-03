const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema(
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
      // mapOption: { type: String, enum: ['school'], required: true },
      // dayOfWeek: { type: [String], enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
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

const School = mongoose.model('School', schoolSchema);

module.exports = School;
