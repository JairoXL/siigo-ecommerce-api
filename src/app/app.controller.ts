import { Controller, Request, Get, Post, UseGuards, Body, NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Controller('api/auth')
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('azure/login')
  async loginAd(@Body() user) {
    const login = this.authService.passportAzureAuth(user);
    if (login) {
      return login;
    } else {
      throw new NotFoundException('Auth failed, please try again or contact with provider');
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user.username);
  }
}
