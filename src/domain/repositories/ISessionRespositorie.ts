import { SessionEntity } from '../entities/session.entities';
/* eslint-disable prettier/prettier */;

export interface ISessionRepositorie {

  getUserByEmail(email: string): void;

  upDateToken(data: SessionEntity): void;
}
