
export class SessionEntity {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly token: string,
    public readonly refreshToken: string,
  ) {}
}
