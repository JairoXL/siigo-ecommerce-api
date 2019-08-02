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
var _a;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let StatesService = class StatesService {
    constructor(stateModel) {
        this.stateModel = stateModel;
    }
    create(createStateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdState = new this.stateModel(createStateDto);
            return yield createdState.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateModel.find().exec();
        });
    }
    findOneById(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateModel.findById(stateId);
        });
    }
    editState(stateId, createStateDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateModel.findByIdAndUpdate(stateId, createStateDto, { new: true });
        });
    }
    deleteState(stateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.stateModel.findByIdAndRemove(stateId);
        });
    }
};
StatesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('State')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], StatesService);
exports.StatesService = StatesService;
//# sourceMappingURL=states.service.js.map