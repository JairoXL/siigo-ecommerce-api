import { Document } from 'mongoose';

export interface City extends Document {
  readonly name: string;
  readonly code: number;
  readonly isoCode2: string;
  readonly isoCode3: string;
  readonly state: string;
  readonly users: object;
}
