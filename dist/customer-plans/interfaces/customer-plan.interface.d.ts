import { Document } from 'mongoose';
export interface CustomerPlans extends Document {
    readonly customerId: string;
    readonly on: object;
    readonly onModel: object;
    readonly orders: object;
}
