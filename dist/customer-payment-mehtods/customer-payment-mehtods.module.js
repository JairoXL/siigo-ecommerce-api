"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const customer_payment_mehtods_service_1 = require("./customer-payment-mehtods.service");
const customer_payment_mehtods_controller_1 = require("./customer-payment-mehtods.controller");
const mongoose_1 = require("@nestjs/mongoose");
const payment_method_customer_schema_1 = require("./schemas/payment-method-customer.schema");
let CustomerPaymentMehtodsModule = class CustomerPaymentMehtodsModule {
};
CustomerPaymentMehtodsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'CustomerPaymentMethod', schema: payment_method_customer_schema_1.CustomerPaymentMethodSchema }])],
        controllers: [customer_payment_mehtods_controller_1.CustomerPaymentMehtodsController],
        providers: [customer_payment_mehtods_service_1.CustomerPaymentMehtodsService],
    })
], CustomerPaymentMehtodsModule);
exports.CustomerPaymentMehtodsModule = CustomerPaymentMehtodsModule;
//# sourceMappingURL=customer-payment-mehtods.module.js.map