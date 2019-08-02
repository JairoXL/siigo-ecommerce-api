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
const create_country_dto_1 = require("./dto/create-country.dto");
const countries_service_1 = require("./countries.service");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
let CountriesController = class CountriesController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    create(createCountryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.countriesService.create(createCountryDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.countriesService.findAll();
        });
    }
    getCountry(res, countryId) {
        return __awaiter(this, void 0, void 0, function* () {
            const country = yield this.countriesService.findOneById(countryId);
            if (!country) {
                throw new common_1.NotFoundException('Country does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(country);
        });
    }
    updateCountry(res, countryId, createCountryDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedCountry = yield this.countriesService.editCountry(countryId, createCountryDto);
            if (!editedCountry) {
                throw new common_1.NotFoundException('Country does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Country has been successfully updated',
                post: editedCountry,
            });
        });
    }
    deleteCountry(res, country) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedCountry = yield this.countriesService.deleteCountry(country.countryId);
            if (!deletedCountry) {
                throw new common_1.NotFoundException('Country does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Country has been deleted!',
                country: deletedCountry,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_dto_1.CreateCountryDto]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:countryId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('countryId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "getCountry", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('countryId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_country_dto_1.CreateCountryDto]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "updateCountry", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CountriesController.prototype, "deleteCountry", null);
CountriesController = __decorate([
    common_1.Controller('api/countries'),
    __metadata("design:paramtypes", [countries_service_1.CountriesService])
], CountriesController);
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.controller.js.map