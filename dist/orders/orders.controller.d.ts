import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './interfaces/order.interface';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    getOrder(res: any, orderId: any): Promise<any>;
    updateOrder(res: any, orderId: any, createOrderDto: CreateOrderDto): Promise<any>;
    deleteOrder(res: any, order: any): Promise<any>;
}
