import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const createdOrder = new this.orderModel(createOrderDto);
    return await createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOneById(orderId): Promise<Order> {
    return await this.orderModel.findById(orderId);
  }

  async editOrder(orderId, createOrderDto: CreateOrderDto): Promise<Order> {
    return await this.orderModel.findByIdAndUpdate(orderId, createOrderDto, { new: true });
  }

  async deleteOrder(orderId: string): Promise<any> {
    return await this.orderModel.findByIdAndRemove(orderId);
  }
}
