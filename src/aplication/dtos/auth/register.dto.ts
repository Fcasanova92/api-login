
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty } from 'class-validator';
export class RegisterUserDTO {
  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  refreshToken: string;

}
