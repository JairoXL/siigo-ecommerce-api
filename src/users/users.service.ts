import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto} from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(uname): Promise<User> {
    return await this.userModel.findOne({ username : uname });
  }

  async findOneById(userId): Promise<User> {
    return await this.userModel.findById(userId);
  }

  async editUser(userId, createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(userId, createUserDto, { new: true });
  }

  async deleteUser(userId: string): Promise<any> {
    return await this.userModel.findByIdAndRemove(userId);
  }

}
