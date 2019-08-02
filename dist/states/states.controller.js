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
const states_service_1 = require("./states.service");
const create_state_dto_1 = require("./dto/create-state.dto");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
let StatesController = class StatesController {
    constructor(statesService) {
        this.statesService = statesService;
    }
    create(createStateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.statesService.create(createStateDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.statesService.findAll();
        });
    }
    getState(res, stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            const state = yield this.statesService.findOneById(stateId);
            if (!state) {
                throw new common_1.NotFoundException('State does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(state);
        });
    }
    updateState(res, stateId, createStateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedState = yield this.statesService.editState(stateId, createStateDto);
            if (!editedState) {
                throw new common_1.NotFoundException('State does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'State has been successfully updated',
                post: editedState,
            });
        });
    }
    deleteState(res, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedState = yield this.statesService.deleteState(state.stateId);
            if (!deletedState) {
                throw new common_1.NotFoundException('State does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'State has been deleted!',
                state: deletedState,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_state_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:stateId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('stateId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "getState", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('stateId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_state_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "updateState", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StatesController.prototype, "deleteState", null);
StatesController = __decorate([
    common_1.Controller('api/states'),
    __metadata("design:paramtypes", [states_service_1.StatesService])
], StatesController);
exports.StatesController = StatesController;
//# sourceMappingURL=states.controller.js.map