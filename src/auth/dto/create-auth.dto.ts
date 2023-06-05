import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @IsString({
    message: '用户名只能是字符串',
  })
  name: string;

  @IsString()
  @Length(6, 20, {
    message: `haha123: $value`,
  })
  password: string;

  @IsNotEmpty()
  pwd: string;
}
