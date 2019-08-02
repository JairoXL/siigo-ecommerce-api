import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { State } from './interfaces/state.interface';
import { CreateStateDto } from './dto/create-state.dto';

@Injectable()
export class StatesService {
  constructor(@InjectModel('State') private readonly stateModel: Model<State>) {}

  async create(createStateDto: CreateStateDto): Promise<State> {
    const createdState = new this.stateModel(createStateDto);
    return await createdState.save();
  }

  async findAll(): Promise<State[]> {
    return await this.stateModel.find().exec();
  }

  async findOneById(stateId): Promise<State> {
    return await this.stateModel.findById(stateId);
  }

  async editState(stateId, createStateDto: CreateStateDto): Promise<State> {
    return await this.stateModel.findByIdAndUpdate(stateId, createStateDto, { new: true });
  }

  async deleteState(stateId: string): Promise<any> {
    return await this.stateModel.findByIdAndRemove(stateId);
  }
}
