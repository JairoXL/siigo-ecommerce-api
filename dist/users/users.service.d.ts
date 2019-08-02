import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(uname: any): Promise<User>;
    findOneById(userId: any): Promise<User>;
    editUser(userId: any, createUserDto: CreateUserDto): Promise<User>;
    deleteUser(userId: string): Promise<any>;
}
