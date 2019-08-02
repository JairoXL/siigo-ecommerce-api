"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.CustomerPaymentMethodSchema = new Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer',
    },
    ccToken: {
        type: String,
        required: false,
    },
    franchise: {
        type: String,
        enum: ['VISA', 'MASTER CARD', 'AMERICAN EXPRESS', 'DINERS'],
    },
    orders: [{
            type: ObjectId,
            ref: 'Order',
        }],
}, {
    timestamps: true,
});
//# sourceMappingURL=payment-method-customer.schema.js.map