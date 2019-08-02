import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId
export const StateSchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: false,
  },
  isoCode2: {
    type: String,
    required: false,
  },
  isoCode3: {
    type: String,
    required: false,
  },
  country: {
    type: ObjectId,
    ref: 'Country',
  },
  cities: [{
    type: ObjectId,
    ref: 'City',
  }],
}, {
  timestamps: true,
});
