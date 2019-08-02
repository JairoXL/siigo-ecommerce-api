import { Model } from 'mongoose';
import { SpecialPlan } from './interface/special-plan.interface';
import { CreateSpecialPlanDto } from './dto/create-special-plan.dto';
export declare class SpecialPlansService {
    private readonly specialPlanModel;
    constructor(specialPlanModel: Model<SpecialPlan>);
    create(createSpecialPlanDto: CreateSpecialPlanDto): Promise<SpecialPlan>;
    findAll(): Promise<SpecialPlan[]>;
    findOneById(planId: any): Promise<SpecialPlan>;
    editPlan(planId: any, createSpecialPlanDto: CreateSpecialPlanDto): Promise<SpecialPlan>;
    deletePlan(planId: string): Promise<any>;
}
