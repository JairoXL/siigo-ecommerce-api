import { SpecialPlansService } from './special-plans.service';
import { CreateSpecialPlanDto } from './dto/create-special-plan.dto';
import { SpecialPlan } from './interface/special-plan.interface';
export declare class SpecialPlansController {
    private readonly specialPlansService;
    constructor(specialPlansService: SpecialPlansService);
    create(createSpecialPlanDto: CreateSpecialPlanDto): Promise<SpecialPlan>;
    findAll(): Promise<SpecialPlan[]>;
    getPlan(res: any, planId: any): Promise<any>;
    updatePlan(res: any, planId: any, createSpecialPlanDto: CreateSpecialPlanDto): Promise<any>;
    deletePlan(res: any, plan: any): Promise<any>;
}
