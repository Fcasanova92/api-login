/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
