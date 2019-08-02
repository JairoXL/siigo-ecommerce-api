"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.StateSchema = new Schema({
    id: ObjectId,
    name: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: false,
    },
    isoCode2: {
        type: String,
        required: false,
    },
    isoCode3: {
        type: String,
        required: false,
    },
    country: {
        type: ObjectId,
        ref: 'Country',
    },
    cities: [{
            type: ObjectId,
            ref: 'City',
        }],
}, {
    timestamps: true,
});
//# sourceMappingURL=state.schema.js.map