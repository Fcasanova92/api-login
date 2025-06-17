
import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RegisterUser } from 'src/aplication/useCases/session/registerUser';
import { CreateUser } from 'src/aplication/useCases/user/createUser.';
import { LoginUser } from 'src/aplication/useCases/session/loginUser';
import { LoginUserRequestDTO } from '../dtos/request/LoginUserRequest.dto';
import { RegisterUserRequestDTO } from '../dtos/request/RegisterUserRequest.dto';

@Controller('session')
export class SessionController {
  constructor(
    private createUserCase: CreateUser,
    private registerUserCase: RegisterUser,
    private loginUserCase: LoginUser
  ) {}

  @Post("/login")
  @UsePipes(new ValidationPipe({ transform: true }))
  login(@Body() loginDto: LoginUserRequestDTO):any{
    const {email, password} = loginDto
    this.loginUserCase.login({email, password})
    // el caso de uso para generar el login
  }

  @Post("/register")
  register(@Body() registerDto: RegisterUserRequestDTO):any{

    const {name, surname, email, password} = registerDto

    this.createUserCase.create({name, surname, email})
        // el caso de uso para generar el registro}
    // generar token inicial
    const token = ""
    const refreshToken = ""
    this.registerUserCase.register({email, password, token, refreshToken})
  }
}
