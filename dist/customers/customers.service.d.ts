import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';
export declare class CustomersService {
    private readonly customerModel;
    constructor(customerModel: Model<Customer>);
    create(createCustomerDto: CreateCustomerDto): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findOneById(customerId: any): Promise<Customer>;
    editCustomer(customerId: any, createCustomerDto: CreateCustomerDto): Promise<Customer>;
    deleteCustomer(customerId: string): Promise<any>;
}
