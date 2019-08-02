import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RoleSchema = new Schema ({
  id: Schema.Types.ObjectId,
  role: {
    type: String,
    required: true,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  timestamp: true,
});
