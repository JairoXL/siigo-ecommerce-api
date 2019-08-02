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
const plans_service_1 = require("./plans.service");
const plan_schema_1 = require("./schemas/plan.schema");
const plans_controller_1 = require("./plans.controller");
let PlansModule = class PlansModule {
};
PlansModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Plan', schema: plan_schema_1.PlanSchema }])],
        controllers: [plans_controller_1.PlansController],
        providers: [plans_service_1.PlansService],
    })
], PlansModule);
exports.PlansModule = PlansModule;
//# sourceMappingURL=plans.module.js.map