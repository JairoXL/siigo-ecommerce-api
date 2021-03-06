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
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const validate_object_id_pipes_1 = require("../app/shared/pipes/validate-object-id.pipes");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersService.create(createUserDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersService.findAll();
        });
    }
    getUser(res, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOneById(userId);
            if (!user) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(user);
        });
    }
    updateUser(res, userId, createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedUser = yield this.usersService.editUser(userId, createUserDto);
            if (!editedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User has been successfully updated',
                post: editedUser,
            });
        });
    }
    deleteUser(res, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.usersService.deleteUser(user.userId);
            if (!deletedUser) {
                throw new common_1.NotFoundException('User does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'User has been deleted!',
                user: deletedUser,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:userId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('userId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUser", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('userId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map