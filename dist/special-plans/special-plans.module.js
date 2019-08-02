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
const special_plan_schema_1 = require("./schemas/special-plan.schema");
const special_plans_controller_1 = require("./special-plans.controller");
const special_plans_service_1 = require("./special-plans.service");
let SpecialPlansModule = class SpecialPlansModule {
};
SpecialPlansModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'SpecialPlan', schema: special_plan_schema_1.SpecialPlanSchema }])],
        controllers: [special_plans_controller_1.SpecialPlansController],
        providers: [special_plans_service_1.SpecialPlansService],
    })
], SpecialPlansModule);
exports.SpecialPlansModule = SpecialPlansModule;
//# sourceMappingURL=special-plans.module.js.map