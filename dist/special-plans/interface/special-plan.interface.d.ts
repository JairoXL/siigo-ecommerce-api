import { Document } from 'mongoose';
export interface SpecialPlan extends Document {
    readonly plan: string;
    readonly shortDescription: string;
    readonly longDescription: string;
    readonly imgUrl: string;
    readonly price: number;
    readonly userId: number;
    readonly status: boolean;
    readonly startDate: string;
    readonly endDate: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}
