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
const customers_service_1 = require("./customers.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
let CustomersController = class CustomersController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    create(createCustomerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.customersService.create(createCustomerDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customersService.findAll();
        });
    }
    getCustomer(res, customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const customer = yield this.customersService.findOneById(customerId);
            if (!customer) {
                throw new common_1.NotFoundException('Customer does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(customer);
        });
    }
    updateCustomer(res, customerId, createCustomerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedCustomer = yield this.customersService.editCustomer(customerId, createCustomerDto);
            if (!editedCustomer) {
                throw new common_1.NotFoundException('Customer does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Customer has been successfully updated',
                post: editedCustomer,
            });
        });
    }
    deleteCustomer(res, customerPlan) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCustomer = yield this.customersService.deleteCustomer(customerPlan.customerPlanId);
            if (!deletedCustomer) {
                throw new common_1.NotFoundException('Customer does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Customer has been deleted!',
                customer: deletedCustomer,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:customerId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('customerId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getCustomer", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('customerId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_customer_dto_1.CreateCustomerDto]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateCustomer", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteCustomer", null);
CustomersController = __decorate([
    common_1.Controller('api/customers'),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map