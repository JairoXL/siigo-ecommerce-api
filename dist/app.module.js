"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const countries_module_1 = require("./countries/countries.module");
const states_module_1 = require("./states/states.module");
const cities_module_1 = require("./cities/cities.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const app_controller_1 = require("./app/app.controller");
const roles_module_1 = require("./roles/roles.module");
const customers_module_1 = require("./customers/customers.module");
const plans_module_1 = require("./plans/plans.module");
const special_plans_module_1 = require("./special-plans/special-plans.module");
const customer_plans_module_1 = require("./customer-plans/customer-plans.module");
const coupons_module_1 = require("./coupons/coupons.module");
const customer_payment_methods_module_1 = require("./customer-payment-mehtods/customer-payment-methods.module");
const orders_module_1 = require("./orders/orders.module");
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/siigo-api'),
            countries_module_1.CountriesModule,
            states_module_1.StatesModule,
            cities_module_1.CitiesModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            roles_module_1.RolesModule,
            plans_module_1.PlansModule,
            customers_module_1.CustomersModule,
            special_plans_module_1.SpecialPlansModule,
            customer_plans_module_1.CustomerPlansModule,
            coupons_module_1.CouponsModule,
            customer_payment_methods_module_1.CustomerPaymentMethodsModule,
            orders_module_1.OrdersModule,
        ],
        controllers: [app_controller_1.AppController],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map