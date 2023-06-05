import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginPipe } from './pipes/login.pipe';
import { Public } from './decorators/public.decorator';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body(LoginPipe) createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }

  @Post('register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }
}
