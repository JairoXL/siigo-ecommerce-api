import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './interfaces/role.interface';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    getRole(res: any, roleId: any): Promise<any>;
    updateRole(res: any, roleId: any, createRoleDto: CreateRoleDto): Promise<any>;
    deleteRole(res: any, role: any): Promise<any>;
}
