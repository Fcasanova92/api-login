
import { RegisterUserDTO } from 'src/aplication/dtos/auth/register.dto';
import { SessionEntity } from 'src/domain/entities/session.entities';
import { ISessionRepositorie } from 'src/domain/repositories/ISessionRespositorie';

export class RegisterUser {
  constructor(private readonly repositorie: ISessionRepositorie) {}

  public async register(data: RegisterUserDTO): Promise<void> {
    const usuario = new SessionEntity(data.email, data.token, data.refreshToken, data.password);

    await this.repositorie.register(usuario);
  }
}
