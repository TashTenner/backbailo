const mongoose = require('mongoose');

const { Schema } = mongoose;

const schoolSchema = new Schema(
  {
    name: { type: String, required: true },
    address: {
      street: String,
      number: Number,
      additionalInfo: String,
      postcode: String,
      city: String,
      country: String,
    },
    coordinates: {
      lat: Number,
      lng: Number,
    },
    dayOfWeek: { type: [String], enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    type: { type: String, enum: ['school'] },
    contact: {
      phoneNr: String,
      mail: String,
      website: String,
      nameOrganizer: String,
    },
    mainPhoto: String,
    morePhotos: [String],
    rating: Number,
    followers: [String],
    status: { type: String, enum: ['pending', 'accepted', 'rejected'] },
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
