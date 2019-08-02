import { Model } from 'mongoose';
import { CustomerPaymentMethod } from './interfaces/payment-method-customer.interface';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
export declare class CustomerPaymentMethodsService {
    private readonly customerPaymentMethodModel;
    constructor(customerPaymentMethodModel: Model<CustomerPaymentMethod>);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<CustomerPaymentMethod>;
    findAll(): Promise<CustomerPaymentMethod[]>;
    findOneById(paymentMethodId: any): Promise<CustomerPaymentMethod>;
    editPaymentMethod(paymentMethodId: any, createPaymentMethodDto: CreatePaymentMethodDto): Promise<CustomerPaymentMethod>;
    deletePaymentMethod(paymentMethodId: string): Promise<any>;
}
