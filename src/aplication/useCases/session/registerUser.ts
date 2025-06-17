
import { SessionEntity } from 'src/domain/entities/session.entities';
import { ISessionRepositorie } from 'src/domain/repositories/ISessionRespositorie';

export class RegisterUser {
  constructor(private readonly repositorie: ISessionRepositorie) {}

  public async register(data: SessionEntity): Promise<void> {

    // generar tokens
    const token = ""

    const refreshToken = ""

    const usuario = new SessionEntity(data.email, token, refreshToken, data.password);

    await this.repositorie.register(usuario);
  }
}
