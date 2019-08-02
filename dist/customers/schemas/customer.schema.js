"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: 'User',
        unique: true,
    },
    documentType: {
        type: String,
        enum: ['CC', 'CE'],
        default: 'CC',
    },
    documentNumber: {
        type: Number,
        required: true,
    },
    paymentMethods: [{
            type: ObjectId,
            ref: 'CustomerPaymentMethod',
        }],
}, {
    timestamps: true,
});
//# sourceMappingURL=customer.schema.js.map