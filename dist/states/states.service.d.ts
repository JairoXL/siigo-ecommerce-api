import { Model } from 'mongoose';
import { State } from './interfaces/state.interface';
import { CreateStateDto } from './dto/create-state.dto';
export declare class StatesService {
    private readonly stateModel;
    constructor(stateModel: Model<State>);
    create(createStateDto: CreateStateDto): Promise<State>;
    findAll(): Promise<State[]>;
    findOneById(stateId: any): Promise<State>;
    editState(stateId: any, createStateDto: CreateStateDto): Promise<State>;
    deleteState(stateId: string): Promise<any>;
}
