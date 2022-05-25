import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, trim: true },
    phone_number: { type: String, trim: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    avatar: {
      type: String,
      default: ''
    },
    location: {
      coords: { type: [Number] }
    },
    soft_delete: { type: Boolean }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model('User', UserSchema);
