/* eslint-disable prettier/prettier */
import { Controller, Post, Req } from '@nestjs/common';

@Controller('session')
export class AppController {
  constructor() {}

  @Post("/login")
  login(@Req() request: Request):any{
    // el caso de uso para generar el login
  }

  @Post("/register")
  register(@Req() request: Request):any{
        // el caso de uso para generar el registro
  }
}
