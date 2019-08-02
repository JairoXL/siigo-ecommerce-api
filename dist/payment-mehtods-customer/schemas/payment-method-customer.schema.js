"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.customerPaymentMethod = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
    },
    ccToken: {
        type: String,
        required: false,
    },
    franchise: {
        type: String,
        required: false,
    },
    orders: [{
            type: Schema.Types.ObjectId,
            ref: 'Order',
        }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=payment-method-customer.schema.js.map