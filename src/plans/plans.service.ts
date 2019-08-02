import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Plan } from './interfaces/plan.interface';
import { CreatePlanDto } from './dto/create-plan.dto';

@Injectable()
export class PlansService {
  constructor(@InjectModel('Plan') private readonly planModel: Model<Plan>) {}

  async create(createPlanDto: CreatePlanDto): Promise<Plan> {
    const createdPlan = new this.planModel(createPlanDto);
    return await createdPlan.save();
  }

  async findAll(): Promise<Plan[]> {
    return await this.planModel.find().exec();
  }

  async findOneById(planId): Promise<Plan> {
    return await this.planModel.findById(planId);
  }

  async editPlan(planId, createPlanDto: CreatePlanDto): Promise<Plan> {
    return await this.planModel.findByIdAndUpdate(planId, createPlanDto, { new: true });
  }

  async deletePlan(planId: string): Promise<any> {
    return await this.planModel.findByIdAndRemove(planId);
  }
}
