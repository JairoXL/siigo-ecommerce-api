import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return await createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findOneById(customerId): Promise<Customer> {
    return await this.customerModel.findById(customerId);
  }

  async editCustomer(customerId, createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return await this.customerModel.findByIdAndUpdate(customerId, createCustomerDto, { new: true });
  }

  async deleteCustomer(customerId: string): Promise<any> {
    return await this.customerModel.findByIdAndRemove(customerId);
  }
}
