import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user._doc.username, sub: user._doc._id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user._doc,
    };
  }

  async passportAzureAuth(user: any) {
    const ActiveDirectory = require('activedirectory');
    const config = {
      url: 'https://login.microsoftonline.com/3a7479db-d9ff-4e0b-9d0a-380a5e714f6f/saml2',
      baseDN: 'dc=siigo,dc=com',
      username: 'mend112186@siigo.com',
      password: 'mariana040609',
    };
    const ad = new ActiveDirectory(config);
    console.log(ad)
    ad.authenticate(user.username, user.password, (err, data) => {
      if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      if (data) {
        return data;
      } else {
        return false;
      }
    });

  }
}
