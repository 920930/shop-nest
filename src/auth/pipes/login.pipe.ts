import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';

@Injectable()
export class LoginPipe implements PipeTransform {
  transform(value: CreateAuthDto, metadata: ArgumentMetadata) {
    if (value.password != value.pwd) {
      // throw new BadRequestException
      throw new BadRequestException('两次密码不一致');
      // throw new BadRequestException('两次密码不一致', { cause: new Error(), description: 'Some error description' })
    }
    return value;
  }
}
