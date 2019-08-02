import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerPlans } from './interfaces/customer-plan.interface';
import { CreateCustomerPlanDto } from './dto/create-customer-plan.dto';

@Injectable()
export class CustomerPlansService {
  constructor(@InjectModel('CustomerPlans') private readonly customerPlansModel: Model<CustomerPlans>) {}

  async create(createCustomerPlansDto: CreateCustomerPlanDto): Promise<CustomerPlans> {
    const createdCustomerPlans = new this.customerPlansModel(createCustomerPlansDto);
    return await createdCustomerPlans.save();
  }

  async findAll(): Promise<CustomerPlans[]> {
    return await this.customerPlansModel.find().exec();
  }

  async findOneById(customerPlanId): Promise<CustomerPlans> {
    return await this.customerPlansModel.findById(customerPlanId);
  }

  async editCustomerPlan(customerPlanId, createCustomerPlansDto: CreateCustomerPlanDto): Promise<CustomerPlans> {
    return await this.customerPlansModel.findByIdAndUpdate(customerPlanId, createCustomerPlansDto, { new: true });
  }

  async deleteCustomerPlan(customerPlanId: string): Promise<any> {
    return await this.customerPlansModel.findByIdAndRemove(customerPlanId);
  }
}
