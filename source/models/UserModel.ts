import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    first_name: {type: String, required: true, trim: true},
    last_name: {type: String, required: true, trim: true},
    email:{type: String, required: true, unique: true, trim: true},
    password: { type: String, required: true, trim: true },
    soft_delete: {type: Boolean},
},{timestamps: true});

export const UserModel = mongoose.model('User', UserSchema);
