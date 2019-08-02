import { Model } from 'mongoose';
import { Order } from './interfaces/order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOneById(orderId: any): Promise<Order>;
    editOrder(orderId: any, createOrderDto: CreateOrderDto): Promise<Order>;
    deleteOrder(orderId: string): Promise<any>;
}
