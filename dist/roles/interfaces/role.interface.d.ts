import { Document } from 'mongoose';
export interface Role extends Document {
    readonly id: number;
    readonly role: string;
    readonly status: boolean;
}
