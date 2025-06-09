/* eslint-disable prettier/prettier */
import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDTO } from 'src/domain/dtos/auth/login.dto';
import { RegisterDTO } from 'src/domain/dtos/auth/register.dto';

@Controller('session')
export class AppController {
  constructor() {}

  @Post("/login")
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginDto: LoginDTO):any{
    // el caso de uso para generar el login
  }

  @Post("/register")
  register(@Body() registerDto: RegisterDTO):any{
        // el caso de uso para generar el registro
  }
}
