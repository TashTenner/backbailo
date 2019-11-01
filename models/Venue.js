const mongoose = require('mongoose');

const { Schema } = mongoose;
// venue needs to be changed to venue
// either starting and finishing date OR continously
// continously: boolean;
// mongoose and mongodb require to start with lng
// name of the organizer will be a link to the user
const venueSchema = new Schema(
  {
    type: { type: String, enum: ['Feature'], required: true },
    geometry: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
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
      mapOption: { type: String, enum: ['milonga', 'practica', 'school'] },
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
      morePhotos: [String],
      rating: Number,
      followers: [String],
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
