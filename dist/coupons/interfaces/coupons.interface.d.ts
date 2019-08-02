import { Document } from 'mongoose';
export interface Coupon extends Document {
    readonly name: string;
    readonly coupon: string;
    readonly userId: string;
    readonly uses: string;
    readonly limitUses: string;
    readonly startDate: string;
    readonly endDate: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}
