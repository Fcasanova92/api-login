/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Req } from '@nestjs/common';

@Controller('session')
export class AppController {
  constructor() {}


  @Get("/email")
  getByEmail(@Body('email') email: string):any{
    // el caso de uso para obtener la informacion del usuario por mail
  }

  @Get("/id")
  getById(@Body('id') id: string):any{
     // el caso de uso para obtener la informacion del usuario por id
  }

}