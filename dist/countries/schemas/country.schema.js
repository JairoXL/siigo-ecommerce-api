"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.CountrySchema = new Schema({
    id: ObjectId,
    name: {
        type: String,
        required: true,
    },
    isoCode2: {
        type: String,
        required: false,
    },
    isoCode3: {
        type: String,
        required: false,
    },
    states: [{ type: ObjectId, ref: 'State' }],
    phonePrefix: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
//# sourceMappingURL=country.schema.js.map