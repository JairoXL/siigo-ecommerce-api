import { Document } from 'mongoose';

export interface Coupon extends Document {
  readonly name: string;
  readonly coupon: string;
  readonly user: string;
  readonly uses: string;
  readonly limitUses: string;
  readonly orders: object;
  readonly startDate: string;
  readonly endDate: string;
}
