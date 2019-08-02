import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerPlansService } from './customer-plans.service';
import { CustomerPlanSchema } from './schemas/customer-plan.schema';
import { CustomerPlansController } from './customer-plans.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'CustomerPlans', schema: CustomerPlanSchema }])],
  controllers: [CustomerPlansController],
  providers: [CustomerPlansService],
})
export class CustomerPlansModule {}
