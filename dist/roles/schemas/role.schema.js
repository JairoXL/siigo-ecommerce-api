"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.RoleSchema = new Schema({
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
//# sourceMappingURL=role.schema.js.map