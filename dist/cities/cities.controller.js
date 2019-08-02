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
const cities_service_1 = require("./cities.service");
const create_city_dto_1 = require("./dto/create-city.dto");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
let CitiesController = class CitiesController {
    constructor(citiesService) {
        this.citiesService = citiesService;
    }
    create(createCityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.citiesService.create(createCityDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.citiesService.findAll();
        });
    }
    getCity(res, cityId) {
        return __awaiter(this, void 0, void 0, function* () {
            const city = yield this.citiesService.findOneById(cityId);
            if (!city) {
                throw new common_1.NotFoundException('City does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(city);
        });
    }
    updateCity(res, cityId, createCityDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedCity = yield this.citiesService.editCity(cityId, createCityDto);
            if (!editedCity) {
                throw new common_1.NotFoundException('City does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'City has been successfully updated',
                post: editedCity,
            });
        });
    }
    deleteCity(res, city) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCity = yield this.citiesService.deleteCity(city.cityId);
            if (!deletedCity) {
                throw new common_1.NotFoundException('City does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'City has been deleted!',
                city: deletedCity,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:cityId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('cityId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "getCity", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('cityId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "updateCity", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CitiesController.prototype, "deleteCity", null);
CitiesController = __decorate([
    common_1.Controller('api/cities'),
    __metadata("design:paramtypes", [cities_service_1.CitiesService])
], CitiesController);
exports.CitiesController = CitiesController;
//# sourceMappingURL=cities.controller.js.map