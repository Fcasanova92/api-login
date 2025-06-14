import { SessionEntity } from '../entities/session.entities';

export interface ISessionRepositorie {

  getUserByEmail(email: string): Promise<void>;

  upDateToken(data: SessionEntity): Promise<void>;
}
