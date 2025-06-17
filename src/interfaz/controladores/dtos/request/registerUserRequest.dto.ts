
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsEmail } from 'class-validator';
export class RegisterUserRequestDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
