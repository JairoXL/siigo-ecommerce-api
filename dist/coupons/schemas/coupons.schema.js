"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.CouponSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    coupon: {
        type: String,
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    uses: {
        type: String,
        required: false,
    },
    limitUses: {
        type: String,
        required: false,
        default: null,
    },
    orders: [{
            type: Schema.Types.ObjectId,
            ref: 'Order',
        }],
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
//# sourceMappingURL=coupons.schema.js.map