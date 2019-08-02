"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
exports.CustomerPlanSchema = new Schema({
    customer: {
        type: ObjectId,
        ref: 'Customer',
    },
    plan: {
        type: ObjectId,
        required: true,
        refPath: 'onModel',
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Plan', 'SpecialPlans'],
    },
    orders: [{
            type: ObjectId,
            ref: 'Order',
        }],
}, {
    timestamps: true,
});
const Plan = mongoose.model('Plan', new Schema({ plan: String }));
const SpecialPlans = mongoose.model('SpecialPlans', new Schema({ plan: String }));
//# sourceMappingURL=customer-plan.schema.js.map