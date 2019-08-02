import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './interfaces/role.interface';

@Controller('api/roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    return await this.rolesService.create(createRoleDto);
  }

  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @Get('id/:roleId')
  async getRole(@Res() res, @Param('roleId', new ValidateObjectId()) roleId) {
    const role = await this.rolesService.findOneById(roleId);
    if (!role) { throw new NotFoundException('Role does not exist!'); }
    return res.status(HttpStatus.OK).json(role);
  }

  @Put()
  async updateRole(
    @Res() res,
    @Query('roleId', new ValidateObjectId()) roleId,
    @Body() createRoleDto: CreateRoleDto,
  ) {
    const editedRole = await this.rolesService.editRole(roleId, createRoleDto);
    if (!editedRole) { throw new NotFoundException('Role does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Role has been successfully updated',
      post: editedRole,
    });
  }

  @Delete()
  async deleteRole(
    @Res() res,
    @Body() role,
  ) {
    const deletedRole = await this.rolesService.deleteRole(role.roleId);
    if (!deletedRole) { throw new NotFoundException('Role does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'Role has been deleted!',
      role: deletedRole,
    });
  }
}
