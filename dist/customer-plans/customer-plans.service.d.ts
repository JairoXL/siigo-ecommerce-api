import { Model } from 'mongoose';
import { CustomerPlans } from './interfaces/customer-plan.interface';
import { CreateCustomerPlanDto } from './dto/create-customer-plan.dto';
export declare class CustomerPlansService {
    private readonly customerPlansModel;
    constructor(customerPlansModel: Model<CustomerPlans>);
    create(createCustomerPlansDto: CreateCustomerPlanDto): Promise<CustomerPlans>;
    findAll(): Promise<CustomerPlans[]>;
    findOneById(customerPlanId: any): Promise<CustomerPlans>;
    editCustomerPlan(customerPlanId: any, createCustomerPlansDto: CreateCustomerPlanDto): Promise<CustomerPlans>;
    deleteCustomerPlan(customerPlanId: string): Promise<any>;
}
