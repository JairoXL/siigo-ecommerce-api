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
const special_plans_service_1 = require("./special-plans.service");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
const create_special_plan_dto_1 = require("./dto/create-special-plan.dto");
let SpecialPlansController = class SpecialPlansController {
    constructor(specialPlansService) {
        this.specialPlansService = specialPlansService;
    }
    create(createSpecialPlanDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.specialPlansService.create(createSpecialPlanDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.specialPlansService.findAll();
        });
    }
    getPlan(res, planId) {
        return __awaiter(this, void 0, void 0, function* () {
            const plan = yield this.specialPlansService.findOneById(planId);
            if (!plan) {
                throw new common_1.NotFoundException('Plan does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(plan);
        });
    }
    updatePlan(res, planId, createSpecialPlanDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedPlan = yield this.specialPlansService.editPlan(planId, createSpecialPlanDto);
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
            const deletedPlan = yield this.specialPlansService.deletePlan(plan.planId);
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
    __metadata("design:paramtypes", [create_special_plan_dto_1.CreateSpecialPlanDto]),
    __metadata("design:returntype", Promise)
], SpecialPlansController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialPlansController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:planId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('planId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecialPlansController.prototype, "getPlan", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('planId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_special_plan_dto_1.CreateSpecialPlanDto]),
    __metadata("design:returntype", Promise)
], SpecialPlansController.prototype, "updatePlan", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecialPlansController.prototype, "deletePlan", null);
SpecialPlansController = __decorate([
    common_1.Controller('api/special-plans'),
    __metadata("design:paramtypes", [special_plans_service_1.SpecialPlansService])
], SpecialPlansController);
exports.SpecialPlansController = SpecialPlansController;
//# sourceMappingURL=special-plans.controller.js.map