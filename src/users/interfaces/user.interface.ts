import { Document } from 'mongoose';

export interface User extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly cellphone: number;
  readonly phone: number;
  readonly role: string;
  readonly settings: object;
  readonly shortcuts: object;
  readonly cityId: number;
  readonly address: string;
  readonly dob: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}
