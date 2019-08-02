import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    getUser(res: any, userId: any): Promise<any>;
    updateUser(res: any, userId: any, createUserDto: CreateUserDto): Promise<any>;
    deleteUser(res: any, user: any): Promise<any>;
}
