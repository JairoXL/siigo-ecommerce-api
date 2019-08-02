import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { SpecialPlansService } from './special-plans.service';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { CreateSpecialPlanDto } from './dto/create-special-plan.dto';
import { SpecialPlan } from './interface/special-plan.interface';

@Controller('api/special-plans')
export class SpecialPlansController {
  constructor(private readonly specialPlansService: SpecialPlansService) {}

  @Post()
  async create(@Body() createSpecialPlanDto: CreateSpecialPlanDto) {
    return await this.specialPlansService.create(createSpecialPlanDto);
  }

  @Get()
  async findAll(): Promise<SpecialPlan[]> {
    return this.specialPlansService.findAll();
  }

  @Get('id/:planId')
  async getPlan(@Res() res, @Param('planId', new ValidateObjectId()) planId) {
    const plan = await this.specialPlansService.findOneById(planId);
    if (!plan) { throw new NotFoundException('Plan does not exist!'); }
    return res.status(HttpStatus.OK).json(plan);
  }

  @Put()
  async updatePlan(
    @Res() res,
    @Query('planId', new ValidateObjectId()) planId,
    @Body() createSpecialPlanDto: CreateSpecialPlanDto,
  ) {
    const editedPlan = await this.specialPlansService.editPlan(planId, createSpecialPlanDto);
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
    const deletedPlan = await this.specialPlansService.deletePlan(plan.planId);
    if (!deletedPlan) { throw new NotFoundException('Plan does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Plan has been deleted!',
      plan: deletedPlan,
    });
  }
}
