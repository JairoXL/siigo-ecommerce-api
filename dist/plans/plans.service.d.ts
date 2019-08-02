import { Model } from 'mongoose';
import { Plan } from './interfaces/plan.interface';
import { CreatePlanDto } from './dto/create-plan.dto';
export declare class PlansService {
    private readonly planModel;
    constructor(planModel: Model<Plan>);
    create(createPlanDto: CreatePlanDto): Promise<Plan>;
    findAll(): Promise<Plan[]>;
    findOneById(planId: any): Promise<Plan>;
    editPlan(planId: any, createPlanDto: CreatePlanDto): Promise<Plan>;
    deletePlan(planId: string): Promise<any>;
}
