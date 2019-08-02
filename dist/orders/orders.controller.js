"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
const orders_service_1 = require("./orders.service");
const create_order_dto_1 = require("./dto/create-order.dto");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    create(createOrderDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ordersService.create(createOrderDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ordersService.findAll();
        });
    }
    getOrder(res, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield this.ordersService.findOneById(orderId);
            if (!order) {
                throw new common_1.NotFoundException('Order does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(order);
        });
    }
    updateOrder(res, orderId, createOrderDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editOrder = yield this.ordersService.editOrder(orderId, createOrderDto);
            if (!editOrder) {
                throw new common_1.NotFoundException('Order does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Order has been successfully updated',
                post: editOrder,
            });
        });
    }
    deleteOrder(res, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedOrder = yield this.ordersService.deleteOrder(order.orderId);
            if (!deletedOrder) {
                throw new common_1.NotFoundException('Order does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Order has been deleted!',
                order: deletedOrder,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:orderId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('orderId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrder", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('orderId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrder", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "deleteOrder", null);
OrdersController = __decorate([
    common_1.Controller('api/orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map