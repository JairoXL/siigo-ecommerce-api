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
const customer_payment_methods_service_1 = require("./customer-payment-methods.service");
const create_payment_method_dto_1 = require("./dto/create-payment-method.dto");
let CustomerPaymentMethodsController = class CustomerPaymentMethodsController {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    create(createPaymentMethodDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.paymentMethod.create(createPaymentMethodDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.paymentMethod.findAll();
        });
    }
    getPaymentMethod(res, paymentMethodId) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentMethod = yield this.paymentMethod.findOneById(paymentMethodId);
            if (!paymentMethod) {
                throw new common_1.NotFoundException('Payment method does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(paymentMethod);
        });
    }
    updatePaymentMethod(res, paymentMethodId, createPaymentMethodDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedPaymentMethod = yield this.paymentMethod.editPaymentMethod(paymentMethodId, createPaymentMethodDto);
            if (!editedPaymentMethod) {
                throw new common_1.NotFoundException('Payment method does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Payment method has been successfully updated',
                post: editedPaymentMethod,
            });
        });
    }
    deletePaymentMethod(res, paymentMethod) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPaymentMethod = yield this.paymentMethod.deletePaymentMethod(paymentMethod.paymentMethodId);
            if (!deletedPaymentMethod) {
                throw new common_1.NotFoundException('Payment method does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Payment method has been deleted!',
                paymentMethod: deletedPaymentMethod,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_method_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", Promise)
], CustomerPaymentMethodsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerPaymentMethodsController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:paymentMethodId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('paymentMethodId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerPaymentMethodsController.prototype, "getPaymentMethod", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('paymentMethodId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_payment_method_dto_1.CreatePaymentMethodDto]),
    __metadata("design:returntype", Promise)
], CustomerPaymentMethodsController.prototype, "updatePaymentMethod", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomerPaymentMethodsController.prototype, "deletePaymentMethod", null);
CustomerPaymentMethodsController = __decorate([
    common_1.Controller('api/payment-methods'),
    __metadata("design:paramtypes", [customer_payment_methods_service_1.CustomerPaymentMethodsService])
], CustomerPaymentMethodsController);
exports.CustomerPaymentMethodsController = CustomerPaymentMethodsController;
//# sourceMappingURL=customer-payment-methods.controller.js.map