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
const plans_service_1 = require("./plans.service");
const create_plan_dto_1 = require("./dto/create-plan.dto");
let PlansController = class PlansController {
    constructor(planService) {
        this.planService = planService;
    }
    create(createPlanDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.planService.create(createPlanDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.planService.findAll();
        });
    }
    getPlan(res, planId) {
        return __awaiter(this, void 0, void 0, function* () {
            const plan = yield this.planService.findOneById(planId);
            if (!plan) {
                throw new common_1.NotFoundException('Plan does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(plan);
        });
    }
    updatePlan(res, planId, createPlanDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedPlan = yield this.planService.editPlan(planId, createPlanDto);
            if (!editedPlan) {
                throw new common_1.NotFoundException('Plan does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Plan has been successfully updated',
                post: editedPlan,
            });
        });
    }
    deletePlan(res, plan) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPlan = yield this.planService.deletePlan(plan.planId);
            if (!deletedPlan) {
                throw new common_1.NotFoundException('Plan does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Plan has been deleted!',
                plan: deletedPlan,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_plan_dto_1.CreatePlanDto]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:planId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('planId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "getPlan", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('planId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_plan_dto_1.CreatePlanDto]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "updatePlan", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlansController.prototype, "deletePlan", null);
PlansController = __decorate([
    common_1.Controller('api/plans'),
    __metadata("design:paramtypes", [plans_service_1.PlansService])
], PlansController);
exports.PlansController = PlansController;
//# sourceMappingURL=plans.controller.js.map