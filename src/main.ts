import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // 设置全局api路径
  app.setGlobalPrefix('api');
  // 全局只能设置一个Filters
  // app.useGlobalFilters(new ...)
  // 全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      //  过滤非设定字段，只显示管道中设定的字段(去除多余字段)
      whitelist: true,
    }),
  );
  // app.useGlobalGuards()
  await app.listen(3000);
}
bootstrap();
