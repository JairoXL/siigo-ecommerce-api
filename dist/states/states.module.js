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
const states_controller_1 = require("./states.controller");
const states_service_1 = require("./states.service");
const state_schema_1 = require("./schemas/state.schema");
let StatesModule = class StatesModule {
};
StatesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'State', schema: state_schema_1.StateSchema }])],
        controllers: [states_controller_1.StatesController],
        providers: [states_service_1.StatesService],
    })
], StatesModule);
exports.StatesModule = StatesModule;
//# sourceMappingURL=states.module.js.map