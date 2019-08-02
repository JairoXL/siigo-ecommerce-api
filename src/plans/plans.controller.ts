import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from './interfaces/plan.interface';

@Controller('api/plans')
export class PlansController {
  constructor(private readonly planService: PlansService) {}

  @Post()
  async create(@Body() createPlanDto: CreatePlanDto) {
    return await this.planService.create(createPlanDto);
  }

  @Get()
  async findAll(): Promise<Plan[]> {
    return this.planService.findAll();
  }

  @Get('id/:planId')
  async getPlan(@Res() res, @Param('planId', new ValidateObjectId()) planId) {
    const plan = await this.planService.findOneById(planId);
    if (!plan) { throw new NotFoundException('Plan does not exist!'); }
    return res.status(HttpStatus.OK).json(plan);
  }

  @Put()
  async updatePlan(
    @Res() res,
    @Query('planId', new ValidateObjectId()) planId,
    @Body() createPlanDto: CreatePlanDto,
  ) {
    const editedPlan = await this.planService.editPlan(planId, createPlanDto);
    if (!editedPlan) { throw new NotFoundException('Plan does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Plan has been successfully updated',
      post: editedPlan,
    });
  }

  @Delete()
  async deletePlan(
    @Res() res,
    @Body() plan,
  ) {
    const deletedPlan = await this.planService.deletePlan(plan.planId);
    if (!deletedPlan) { throw new NotFoundException('Plan does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Plan has been deleted!',
      plan: deletedPlan,
    });
  }
}
