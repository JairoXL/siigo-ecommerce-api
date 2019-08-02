import { CustomerPaymentMethodsService } from './customer-payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { CustomerPaymentMethod } from './interfaces/payment-method-customer.interface';
export declare class CustomerPaymentMethodsController {
    private readonly paymentMethod;
    constructor(paymentMethod: CustomerPaymentMethodsService);
    create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<CustomerPaymentMethod>;
    findAll(): Promise<CustomerPaymentMethod[]>;
    getPaymentMethod(res: any, paymentMethodId: any): Promise<any>;
    updatePaymentMethod(res: any, paymentMethodId: any, createPaymentMethodDto: CreatePaymentMethodDto): Promise<any>;
    deletePaymentMethod(res: any, paymentMethod: any): Promise<any>;
}
