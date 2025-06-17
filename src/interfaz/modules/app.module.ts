import { Module } from '@nestjs/common';
import { UserModel } from './user.module';

@Module({
  imports: [
    UserModel
  ],

})
export class AppModule {}
