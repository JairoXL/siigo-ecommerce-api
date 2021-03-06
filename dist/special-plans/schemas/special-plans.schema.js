"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.SpecialPlansSchema = new Schema({
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
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=special-plans.schema.js.map