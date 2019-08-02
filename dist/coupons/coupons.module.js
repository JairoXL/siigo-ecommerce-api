"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const coupons_service_1 = require("./coupons.service");
const mongoose_1 = require("@nestjs/mongoose");
const coupon_schema_1 = require("./schemas/coupon.schema");
const coupons_controller_1 = require("./coupons.controller");
let CouponsModule = class CouponsModule {
};
CouponsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Coupon', schema: coupon_schema_1.CouponSchema }])],
        controllers: [coupons_controller_1.CouponsController],
        providers: [coupons_service_1.CouponsService],
    })
], CouponsModule);
exports.CouponsModule = CouponsModule;
//# sourceMappingURL=coupons.module.js.map