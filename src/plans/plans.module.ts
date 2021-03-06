import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlansService } from './plans.service';
import { PlanSchema } from './schemas/plan.schema';
import { PlansController } from './plans.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Plan', schema: PlanSchema }])],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
