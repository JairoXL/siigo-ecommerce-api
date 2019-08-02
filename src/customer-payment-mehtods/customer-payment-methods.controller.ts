import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { CustomerPaymentMethodsService } from './customer-payment-methods.service';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { CustomerPaymentMethod } from './interfaces/payment-method-customer.interface';

@Controller('api/payment-methods')
export class CustomerPaymentMethodsController {
  constructor(private readonly paymentMethod: CustomerPaymentMethodsService ) {}

  @Post()
  async create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return await this.paymentMethod.create(createPaymentMethodDto);
  }

  @Get()
  async findAll(): Promise<CustomerPaymentMethod[]> {
    return this.paymentMethod.findAll();
  }

  @Get('id/:paymentMethodId')
  async getPaymentMethod(@Res() res, @Param('paymentMethodId', new ValidateObjectId()) paymentMethodId) {
    const paymentMethod = await this.paymentMethod.findOneById(paymentMethodId);
    if (!paymentMethod) { throw new NotFoundException('Payment method does not exist!'); }
    return res.status(HttpStatus.OK).json(paymentMethod);
  }

  @Put()
  async updatePaymentMethod(
    @Res() res,
    @Query('paymentMethodId', new ValidateObjectId()) paymentMethodId,
    @Body() createPaymentMethodDto: CreatePaymentMethodDto,
  ) {
    const editedPaymentMethod = await this.paymentMethod.editPaymentMethod(paymentMethodId, createPaymentMethodDto);
    if (!editedPaymentMethod) { throw new NotFoundException('Payment method does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Payment method has been successfully updated',
      post: editedPaymentMethod,
    });
  }

  @Delete()
  async deletePaymentMethod(
    @Res() res,
    @Body() paymentMethod,
  ) {
    const deletedPaymentMethod = await this.paymentMethod.deletePaymentMethod(paymentMethod.paymentMethodId);
    if (!deletedPaymentMethod) { throw new NotFoundException('Payment method does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Payment method has been deleted!',
      paymentMethod: deletedPaymentMethod,
    });
  }
}
