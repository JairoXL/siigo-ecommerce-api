"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.CustomerPlansSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
    },
    plan: {
        type: Schema.Types.ObjectId,
        ref: 'onModel',
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Plan', 'SpecialPlans'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=customer-plans.schema.js.map