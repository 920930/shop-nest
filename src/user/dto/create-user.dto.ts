import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsPhoneNumber('CN')
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;
}
