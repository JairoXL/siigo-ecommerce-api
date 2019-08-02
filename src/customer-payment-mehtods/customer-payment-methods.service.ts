import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerPaymentMethod } from './interfaces/payment-method-customer.interface';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';

@Injectable()
export class CustomerPaymentMethodsService {
  constructor(@InjectModel('CustomerPaymentMethod') private readonly customerPaymentMethodModel: Model<CustomerPaymentMethod>) {}

  async create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<CustomerPaymentMethod> {
    const createdPaymentMethod = new this.customerPaymentMethodModel(createPaymentMethodDto);
    return await createdPaymentMethod.save();
  }

  async findAll(): Promise<CustomerPaymentMethod[]> {
    return await this.customerPaymentMethodModel.find().exec();
  }
  async findOneById(paymentMethodId): Promise<CustomerPaymentMethod> {
    return await this.customerPaymentMethodModel.findById(paymentMethodId);
  }

  async editPaymentMethod(paymentMethodId, createPaymentMethodDto: CreatePaymentMethodDto): Promise<CustomerPaymentMethod> {
    return await this.customerPaymentMethodModel.findByIdAndUpdate(paymentMethodId, createPaymentMethodDto, { new: true });
  }

  async deletePaymentMethod(paymentMethodId: string): Promise<any> {
    return await this.customerPaymentMethodModel.findByIdAndRemove(paymentMethodId);
  }
}
