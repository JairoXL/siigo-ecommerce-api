import { Document } from 'mongoose';

export interface Plan extends Document {
  readonly plan: string;
  readonly shortDescription: string;
  readonly longDescription: string;
  readonly imgUrl: string;
  readonly price: number;
  readonly userId: number;
  readonly status: boolean;
}
