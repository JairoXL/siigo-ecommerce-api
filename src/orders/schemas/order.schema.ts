import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const OrderSchema = new Schema({
  status: {
    type: String,
    enum: ['DENIED', 'APPROVED', 'IN PROCESS'],
    default: 'IN PROCESS',
  },
  customer: {
    type: ObjectId,
    ref: 'CustomerPlan',
  },
  paymentMethod: {
    type: ObjectId,
    ref: 'CustomerPaymentMethod',
  },
  coupon: {
    type: ObjectId,
    ref: 'Coupon',
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});
