import { Document } from 'mongoose';
export interface State extends Document {
    readonly name: string;
    readonly code: number;
    readonly isoCode2: string;
    readonly isoCode3: string;
    readonly countryId: number;
    readonly cities: object;
}
