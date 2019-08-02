import { StatesService } from './states.service';
import { CreateStateDto } from './dto/create-state.dto';
import { State } from './interfaces/state.interface';
export declare class StatesController {
    private readonly statesService;
    constructor(statesService: StatesService);
    create(createStateDto: CreateStateDto): Promise<State>;
    findAll(): Promise<State[]>;
    getState(res: any, stateId: any): Promise<any>;
    updateState(res: any, stateId: any, createStateDto: CreateStateDto): Promise<any>;
    deleteState(res: any, state: any): Promise<any>;
}
