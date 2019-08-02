import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectModel('Role') private readonly roleModel: Model<Role>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return await createdRole.save();
  }

  async findAll(): Promise<Role[]> {
    return await this.roleModel.find().exec();
  }
  async findOneById(roleId): Promise<Role> {
    return await this.roleModel.findById(roleId);
  }

  async editRole(roleId, createRoleDto: CreateRoleDto): Promise<Role> {
    return await this.roleModel.findByIdAndUpdate(roleId, createRoleDto, { new: true });
  }

  async deleteRole(roleId: string): Promise<any> {
    return await this.roleModel.findByIdAndRemove(roleId);
  }
}
