import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV || 'development'}`],
      // load: [() => dotenv.config({ path: '.env' })]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('NODE_ENV'))
        console.log(configService.get('DB_PASSWORD'))
        return {
          type: configService.get<'mysql'>('DB_TYPE'),
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '123456',
          database: 'shop',
          synchronize: true,
          autoLoadEntities: true,
        }
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 全局jwt身份验证token，通过auth/decorators/public 方法去除是否jwt验证
    // 也可以在main.ts中全局使用这个，但推荐通过这里
    { provide: APP_GUARD, useClass: AuthGuard },
    // { provide: APP_GUARD, useClass: AuthGuard }
  ],
})
export class AppModule { }
