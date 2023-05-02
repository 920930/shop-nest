import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService){}
  async login(info: CreateAuthDto){
    const payload = { name: info.name, id: 'user.userId' };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
