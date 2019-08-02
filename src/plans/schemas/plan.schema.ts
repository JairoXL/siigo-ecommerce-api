import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const PlanSchema = new Schema({
  plan: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  longDescription: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: true,
  },
  userId: {
    type: ObjectId,
    ref: 'User',
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamps: true,
});
