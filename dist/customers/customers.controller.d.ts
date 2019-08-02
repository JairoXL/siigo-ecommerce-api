import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    getCustomer(res: any, customerId: any): Promise<any>;
    updateCustomer(res: any, customerId: any, createCustomerDto: CreateCustomerDto): Promise<any>;
    deleteCustomer(res: any, customerPlan: any): Promise<any>;
}
