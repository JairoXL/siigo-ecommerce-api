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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(username, pass) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(username);
            if (user && user.password === pass) {
                const { password } = user, result = __rest(user, ["password"]);
                return result;
            }
            return null;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { username: user._doc.username, sub: user._doc._id };
            return {
                access_token: this.jwtService.sign(payload),
                user: user._doc,
            };
        });
    }
    passportAzureAuth(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const ActiveDirectory = require('activedirectory');
            const config = {
                url: 'https://login.microsoftonline.com/3a7479db-d9ff-4e0b-9d0a-380a5e714f6f/saml2',
                baseDN: 'dc=siigo,dc=com',
                username: 'mend112186@siigo.com',
                password: 'mariana040609',
            };
            const ad = new ActiveDirectory(config);
            console.log(ad);
            ad.authenticate(user.username, user.password, (err, data) => {
                if (err) {
                    console.log('ERROR: ' + JSON.stringify(err));
                    return;
                }
                if (data) {
                    return data;
                }
                else {
                    return false;
                }
            });
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map