const mongoose = require('mongoose');

const { Schema } = mongoose;
// venue needs to be changed to venue
// either starting and finishing date OR continously
// continously: boolean;
// mongoose and mongodb require to start with lng
// name of the organizer will be a link to the user
const venueSchema = new Schema(
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
    dayOfWeek: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] },
    type: { type: String, enum: ['milonga', 'practica', 'school'] },
    date: {
      dStart: String,
      dFinish: String,
    },
    time: {
      tStart: String,
      tFinish: String,
    },
    price: {
      number: Number,
      currency: String,
    },
    contact: {
      phoneNr: String,
      mail: String,
      website: String,
      nameOrganizer: String,
    },
    frequency: String,
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

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
