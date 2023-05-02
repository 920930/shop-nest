import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule, JwtModule.register({
    global: true,
    secret: 'jfkdsjkgdsjkgds',
    signOptions: { expiresIn: '60s'}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
