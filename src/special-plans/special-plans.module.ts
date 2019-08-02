import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialPlanSchema } from './schemas/special-plan.schema';
import { SpecialPlansController } from './special-plans.controller';
import { SpecialPlansService } from './special-plans.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'SpecialPlan', schema: SpecialPlanSchema }])],
  controllers: [SpecialPlansController],
  providers: [SpecialPlansService],
})
export class SpecialPlansModule {}
