import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from './interfaces/plan.interface';
export declare class PlansController {
    private readonly planService;
    constructor(planService: PlansService);
    create(createPlanDto: CreatePlanDto): Promise<Plan>;
    findAll(): Promise<Plan[]>;
    getPlan(res: any, planId: any): Promise<any>;
    updatePlan(res: any, planId: any, createPlanDto: CreatePlanDto): Promise<any>;
    deletePlan(res: any, plan: any): Promise<any>;
}
