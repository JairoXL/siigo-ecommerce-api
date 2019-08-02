import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const CouponSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coupon: {
    type: String,
    required: false,
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
  uses: {
    type: String,
    required: false,
    default: 0,
  },
  limitUses: {
    type: String,
    required: false,
    default: null,
  },
  orders: [{
    type: ObjectId,
    ref: 'Order',
  }],
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
}, {
  timestamps: true,
});
