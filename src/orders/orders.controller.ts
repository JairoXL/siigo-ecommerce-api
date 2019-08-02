import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return this.ordersService.findAll();
  }

  @Get('id/:orderId')
  async getOrder(@Res() res, @Param('orderId', new ValidateObjectId()) orderId) {
    const order = await this.ordersService.findOneById(orderId);
    if (!order) { throw new NotFoundException('Order does not exist!'); }
    return res.status(HttpStatus.OK).json(order);
  }

  @Put()
  async updateOrder(
    @Res() res,
    @Query('orderId', new ValidateObjectId()) orderId,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    const editOrder = await this.ordersService.editOrder(orderId, createOrderDto);
    if (!editOrder) { throw new NotFoundException('Order does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Order has been successfully updated',
      post: editOrder,
    });
  }

  @Delete()
  async deleteOrder(
    @Res() res,
    @Body() order,
  ) {
    const deletedOrder = await this.ordersService.deleteOrder(order.orderId);
    if (!deletedOrder) { throw new NotFoundException('Order does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Order has been deleted!',
      order: deletedOrder,
    });
  }
}
