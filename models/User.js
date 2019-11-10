const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    roles: { type: String, enum: ['user', 'client', 'admin'], default: 'user' },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
    // userName: String,
    // location: String,
    // age: Number,
    // // image: {
    // //   type: String,
    // //   default: './images/default_profile_pic.png',
    // // },
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
