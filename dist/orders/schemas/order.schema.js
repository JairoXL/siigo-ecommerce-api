"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.OrderSchema = new Schema({
    status: {
        type: String,
        enum: ['DENIED', 'APPROVED', 'IN PROCESS'],
        default: 'IN PROCESS',
    },
    customer: {
        type: ObjectId,
        ref: 'CustomerPlan',
    },
    paymentMethod: {
        type: ObjectId,
        ref: 'CustomerPaymentMethod',
    },
    coupon: {
        type: ObjectId,
        ref: 'Coupon',
        required: false,
    },
    amount: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
//# sourceMappingURL=order.schema.js.map