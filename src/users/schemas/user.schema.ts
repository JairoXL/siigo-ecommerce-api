import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const UserSchema = new Schema({
  id: ObjectId,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cellphone: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  roleUser: {
    type: ObjectId,
    ref: 'Role',
  },
  role: {
    type: String,
    required: false,
  },
  settings: {
    type: Object,
    required: false,
  },
  shortcuts: {
    type: Object,
    required: false,
  },
  city: {
    type: ObjectId,
    ref: 'City',
  },
  address: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});
