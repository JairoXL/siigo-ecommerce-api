"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const morgan_1 = require("morgan");
const passport_1 = require("passport");
const passport_azure_ad_1 = require("passport-azure-ad");
const common_1 = require("@nestjs/common");
let AdStrategy = class AdStrategy {
    passAuth() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration/',
                clientID: '85327f73-fd44-46b9-a159-28544ff72288',
                validateIssuer: false,
                loggingLevel: 'warn',
                passReqToCallback: false,
            };
            morgan_1.morgan('dev');
            if (options.clientID && options.clientID === 'CLIENT_ID') {
                return false;
            }
            const bearerStrategy = new passport_azure_ad_1.BearerStrategy(options, (token, done) => {
                done(null, {}, token);
            });
            passport_1.passport.use(bearerStrategy);
            passport_1.passport.initialize();
            return passport_1.passport.authenticate('oauth-bearer', { session: false });
        });
    }
};
AdStrategy = __decorate([
    common_1.Injectable()
], AdStrategy);
exports.AdStrategy = AdStrategy;
//# sourceMappingURL=ad.strategy.js.map