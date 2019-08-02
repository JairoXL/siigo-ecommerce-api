import { Document } from 'mongoose';

export interface Country extends Document {
  readonly name: string;
  readonly isoCode2: string;
  readonly isoCode3: string;
  readonly states: object;
  readonly phonePrefix: string;
}
