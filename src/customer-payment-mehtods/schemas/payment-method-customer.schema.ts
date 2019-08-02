import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const CustomerPaymentMethodSchema = new Schema({
  customer: {
    type: ObjectId,
    ref: 'Customer',
  },
  ccToken: {
    type: String,
    required: false,
  },
  franchise: {
    type: String,
    enum: ['VISA', 'MASTER CARD', 'AMERICAN EXPRESS', 'DINERS'],
  },
  orders: [{
    type: ObjectId,
    ref: 'Order',
  }],
}, {
  timestamps: true,
});
