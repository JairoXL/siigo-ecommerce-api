import { Document } from 'mongoose';
export interface customerPaymentMethod extends Document {
    readonly customerId: string;
    readonly ccToken: string;
    readonly franchise: string;
    readonly orders: object;
    readonly createdAt: string;
    readonly updatedAt: string;
}
