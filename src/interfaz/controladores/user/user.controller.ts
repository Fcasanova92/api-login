
import { Body, Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}


  @Get("/email")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getByEmail(@Body('email') email: string):any{
    // el caso de uso para obtener la informacion del usuario por mail
  }

  @Get("/id")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(@Body('id') id: string):any{
     // el caso de uso para obtener la informacion del usuario por id
  }

}