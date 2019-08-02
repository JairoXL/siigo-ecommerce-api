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
const coupons_service_1 = require("./coupons.service");
const create_coupon_dto_1 = require("./dto/create-coupon.dto");
let CouponsController = class CouponsController {
    constructor(couponsService) {
        this.couponsService = couponsService;
    }
    create(createCouponDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.couponsService.create(createCouponDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.couponsService.findAll();
        });
    }
    getCoupon(res, couponId) {
        return __awaiter(this, void 0, void 0, function* () {
            const coupon = yield this.couponsService.findOneById(couponId);
            if (!coupon) {
                throw new common_1.NotFoundException('Coupon does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(coupon);
        });
    }
    updateCoupon(res, couponId, createCouponDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedCoupon = yield this.couponsService.editCoupon(couponId, createCouponDto);
            if (!editedCoupon) {
                throw new common_1.NotFoundException('Coupon does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Coupon has been successfully updated',
                post: editedCoupon,
            });
        });
    }
    deleteCoupon(res, coupon) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCoupon = yield this.couponsService.deleteCoupon(coupon.couponId);
            if (!deletedCoupon) {
                throw new common_1.NotFoundException('Coupon does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Coupon has been deleted!',
                coupon: deletedCoupon,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_coupon_dto_1.CreateCouponDto]),
    __metadata("design:returntype", Promise)
], CouponsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CouponsController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:couponId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('couponId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponsController.prototype, "getCoupon", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('couponId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_coupon_dto_1.CreateCouponDto]),
    __metadata("design:returntype", Promise)
], CouponsController.prototype, "updateCoupon", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CouponsController.prototype, "deleteCoupon", null);
CouponsController = __decorate([
    common_1.Controller('api/coupons'),
    __metadata("design:paramtypes", [coupons_service_1.CouponsService])
], CouponsController);
exports.CouponsController = CouponsController;
//# sourceMappingURL=coupons.controller.js.map