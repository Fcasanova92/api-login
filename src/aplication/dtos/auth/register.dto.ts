
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsEmail } from 'class-validator';
export class RegisterUserDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  refreshToken: string;

}
