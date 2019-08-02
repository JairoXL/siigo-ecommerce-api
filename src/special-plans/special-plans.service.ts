import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SpecialPlan } from './interface/special-plan.interface';
import { CreateSpecialPlanDto } from './dto/create-special-plan.dto';

@Injectable()
export class SpecialPlansService {
  constructor(@InjectModel('SpecialPlan') private readonly specialPlanModel: Model<SpecialPlan>) {}

  async create(createSpecialPlanDto: CreateSpecialPlanDto): Promise<SpecialPlan> {
    const createdPlan = new this.specialPlanModel(createSpecialPlanDto);
    return await createdPlan.save();
  }

  async findAll(): Promise<SpecialPlan[]> {
    return await this.specialPlanModel.find().exec();
  }

  async findOneById(planId): Promise<SpecialPlan> {
    return await this.specialPlanModel.findById(planId);
  }

  async editPlan(planId, createSpecialPlanDto: CreateSpecialPlanDto): Promise<SpecialPlan> {
    return await this.specialPlanModel.findByIdAndUpdate(planId, createSpecialPlanDto, { new: true });
  }

  async deletePlan(planId: string): Promise<any> {
    return await this.specialPlanModel.findByIdAndRemove(planId);
  }
}
