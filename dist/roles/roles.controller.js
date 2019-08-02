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
const roles_service_1 = require("./roles.service");
const create_role_dto_1 = require("./dto/create-role.dto");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    create(createRoleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.rolesService.create(createRoleDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.rolesService.findAll();
        });
    }
    getRole(res, roleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const role = yield this.rolesService.findOneById(roleId);
            if (!role) {
                throw new common_1.NotFoundException('Role does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json(role);
        });
    }
    updateRole(res, roleId, createRoleDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const editedRole = yield this.rolesService.editRole(roleId, createRoleDto);
            if (!editedRole) {
                throw new common_1.NotFoundException('Role does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Role has been successfully updated',
                post: editedRole,
            });
        });
    }
    deleteRole(res, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedRole = yield this.rolesService.deleteRole(role.roleId);
            if (!deletedRole) {
                throw new common_1.NotFoundException('Role does not exist!');
            }
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Role has been deleted!',
                role: deletedRole,
            });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "findAll", null);
__decorate([
    common_1.Get('id/:roleId'),
    __param(0, common_1.Res()), __param(1, common_1.Param('roleId', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRole", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('roleId', new validate_object_id_pipes_1.ValidateObjectId())),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRole", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "deleteRole", null);
RolesController = __decorate([
    common_1.Controller('api/roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map