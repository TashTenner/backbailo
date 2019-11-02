const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    hashedPassword: String,
    userName: String,
    location: String,
    age: Number,
    status: { type: String, enum: ['pending', 'approved', 'rejected'], required: true },
    // image: {
    //   type: String,
    //   default: './images/default_profile_pic.png',
    // },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
