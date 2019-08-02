"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.SpecialPlanSchema = new Schema({
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
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
}, {
    timestamp: true,
});
//# sourceMappingURL=special-plan.schema.js.map