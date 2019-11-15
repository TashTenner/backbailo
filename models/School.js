const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema(
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

const School = mongoose.model('School', schoolSchema);

module.exports = School;
