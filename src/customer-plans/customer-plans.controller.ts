import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { CustomerPlansService } from './customer-plans.service';
import { CreateCustomerPlanDto } from './dto/create-customer-plan.dto';
import { CustomerPlans } from './interfaces/customer-plan.interface';

@Controller('api/customer-plans')
export class CustomerPlansController {
  constructor(private readonly customerPlansService: CustomerPlansService) {}

  @Post()
  async create(@Body() createCustomerPlanDto: CreateCustomerPlanDto) {
    return await this.customerPlansService.create(createCustomerPlanDto);
  }

  @Get()
  async findAll(): Promise<CustomerPlans[]> {
    return this.customerPlansService.findAll();
  }

  @Get('id/:customerPlanId')
  async getCustomer(@Res() res, @Param('customerPlanId', new ValidateObjectId()) customerPlanId) {
    const customerPlan = await this.customerPlansService.findOneById(customerPlanId);
    if (!customerPlan) { throw new NotFoundException('Customer does not exist!'); }
    return res.status(HttpStatus.OK).json(customerPlan);
  }

  @Put()
  async updateCustomer(
    @Res() res,
    @Query('customerPlanId', new ValidateObjectId()) customerPlanId,
    @Body() createCustomerPlanDto: CreateCustomerPlanDto,
  ) {
    const editedCustomerPlan = await this.customerPlansService.editCustomerPlan(customerPlanId, createCustomerPlanDto);
    if (!editedCustomerPlan) { throw new NotFoundException('Customer plan does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Customer plan has been successfully updated',
      post: editedCustomerPlan,
    });
  }

  @Delete()
  async deleteCustomer(
    @Res() res,
    @Body() customerPlan,
  ) {
    const deletedCustomerPlan = await this.customerPlansService.deleteCustomerPlan(customerPlan.customerPlanId);
    if (!deletedCustomerPlan) { throw new NotFoundException('Customer plan does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted!',
      customer: deletedCustomerPlan,
    });
  }
}
