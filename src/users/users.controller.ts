import { Body, Res, Controller, Get, Post, Delete, NotFoundException, HttpStatus, Param, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { ValidateObjectId } from '../app/shared/pipes/validate-object-id.pipes';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('id/:userId')
  async getUser(@Res() res, @Param('userId', new ValidateObjectId()) userId) {
    const user = await this.usersService.findOneById(userId);
    if (!user) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json(user);
  }

  @Put()
  async updateUser(
    @Res() res,
    @Query('userId', new ValidateObjectId()) userId,
    @Body() createUserDto: CreateUserDto,
  ) {
    const editedUser = await this.usersService.editUser(userId, createUserDto);
    if (!editedUser) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      post: editedUser,
    });
  }

  @Delete()
    async deleteUser(
      @Res() res,
      @Body() user,
    ) {
    const deletedUser = await this.usersService.deleteUser(user.userId);
    if (!deletedUser) { throw new NotFoundException('User does not exist!'); }
    return res.status(HttpStatus.OK).json({
      message: 'User has been deleted!',
      user: deletedUser,
    });
  }
}
