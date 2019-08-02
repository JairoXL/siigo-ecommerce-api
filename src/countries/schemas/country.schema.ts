import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export const CountrySchema = new Schema({
  id: ObjectId,
  name: {
    type: String,
    required: true,
  },
  isoCode2: {
    type: String,
    required: false,
  },
  isoCode3: {
    type: String,
    required: false,
  },
  states: [{ type: ObjectId, ref: 'State' }],
  phonePrefix: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});
