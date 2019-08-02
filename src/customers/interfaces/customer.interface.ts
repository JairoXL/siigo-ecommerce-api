import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly userId: number;
  readonly documentType: string;
  readonly documentNumber: number;
  readonly paymentMethods: object;
}
