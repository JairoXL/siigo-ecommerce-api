import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
export declare class AppController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(req: any): Promise<{
        access_token: string;
        user: any;
    }>;
    loginAd(user: any): Promise<void>;
    getProfile(req: any): Promise<import("../users/interfaces/user.interface").User>;
}
