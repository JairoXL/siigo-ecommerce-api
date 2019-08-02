import { Document } from 'mongoose';
export interface CustomerPaymentMethod extends Document {
    readonly customer: string;
    readonly ccToken: string;
    readonly franchise: string;
    readonly orders: object;
}
