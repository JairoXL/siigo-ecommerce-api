import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: 'User',
    unique: true,
  },
  documentType: {
    type: String,
    enum: [ 'CC', 'CE' ],
    default: 'CC',
  },
  documentNumber: {
    type: Number,
    required: true,
  },
  paymentMethods: [{
    type: ObjectId,
    ref: 'CustomerPaymentMethod',
  }],
}, {
  timestamps: true,
});
