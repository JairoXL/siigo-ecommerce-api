import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';

@Controller('api/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return await this.customersService.create(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get('id/:customerId')
  async getCustomer(@Res() res, @Param('customerId', new ValidateObjectId()) customerId) {
    const customer = await this.customersService.findOneById(customerId);
    if (!customer) { throw new NotFoundException('Customer does not exist!'); }
    return res.status(HttpStatus.OK).json(customer);
  }

  @Put()
  async updateCustomer(
    @Res() res,
    @Query('customerId', new ValidateObjectId()) customerId,
    @Body() createCustomerDto: CreateCustomerDto,
  ) {
    const editedCustomer = await this.customersService.editCustomer(customerId, createCustomerDto);
    if (!editedCustomer) { throw new NotFoundException('Customer does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been successfully updated',
      post: editedCustomer,
    });
  }

  @Delete()
  async deleteCustomer(
    @Res() res,
    @Body() customerPlan,
  ) {
    const deletedCustomer = await this.customersService.deleteCustomer(customerPlan.customerPlanId);
    if (!deletedCustomer) { throw new NotFoundException('Customer does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Customer has been deleted!',
      customer: deletedCustomer,
    });
  }
}
