import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config/dist';
import { Public } from './auth/decorators/public.decorator';

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService: ConfigService) { }

  @Get()
  getHello(): string {
    console.log(this.configService.get('DB_TYPE'))
    return this.appService.getHello();
  }
}
