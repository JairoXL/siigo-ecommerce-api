import { CustomerPlansService } from './customer-plans.service';
import { CreateCustomerPlanDto } from './dto/create-customer-plan.dto';
import { CustomerPlans } from './interfaces/customer-plan.interface';
export declare class CustomerPlansController {
    private readonly customerPlansService;
    constructor(customerPlansService: CustomerPlansService);
    create(createCustomerPlanDto: CreateCustomerPlanDto): Promise<CustomerPlans>;
    findAll(): Promise<CustomerPlans[]>;
    getCustomer(res: any, customerPlanId: any): Promise<any>;
    updateCustomer(res: any, customerPlanId: any, createCustomerPlanDto: CreateCustomerPlanDto): Promise<any>;
    deleteCustomer(res: any, customerPlan: any): Promise<any>;
}
