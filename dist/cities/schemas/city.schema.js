"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.CitySchema = new Schema({
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
    state: {
        type: ObjectId,
        ref: 'State',
    },
    users: [{
            type: ObjectId,
            ref: 'User',
        }],
}, {
    timestamps: true,
});
//# sourceMappingURL=city.schema.js.map