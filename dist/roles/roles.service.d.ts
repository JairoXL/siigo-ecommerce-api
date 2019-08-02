import { Model } from 'mongoose';
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create-role.dto';
export declare class RolesService {
    private readonly roleModel;
    constructor(roleModel: Model<Role>);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOneById(roleId: any): Promise<Role>;
    editRole(roleId: any, createRoleDto: CreateRoleDto): Promise<Role>;
    deleteRole(roleId: string): Promise<any>;
}
