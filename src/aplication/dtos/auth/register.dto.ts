/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsEmail } from 'class-validator';
export class RegisterDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsEmail()
  email: string;
}
