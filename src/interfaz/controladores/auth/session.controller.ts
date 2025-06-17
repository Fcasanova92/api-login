
import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginDTO } from 'src/aplication/dtos/auth/login.dto';
import { RegisterUserDTO } from 'src/aplication/dtos/auth/register.dto';

@Controller('session')
export class SessionController {
  constructor() {}

  @Post("/login")
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginDto: LoginDTO):any{
    // el caso de uso para generar el login
  }

  @Post("/register")
  register(@Body() registerDto: RegisterUserDTO):any{
        // el caso de uso para generar el registro
  }
}
