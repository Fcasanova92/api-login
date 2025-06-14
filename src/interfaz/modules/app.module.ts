import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',              // tipo de base de datos
      host: 'localhost',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'tu_base_de_datos',
      entities: [User],           // o ruta glob: __dirname + '/**/*.entity{.ts,.js}'
      synchronize: true,          // solo para dev, sincroniza esquema automáticamente
      logging: true,              // opcional, para ver queries en consola
    }),

    TypeOrmModule.forFeature([User]), // para inyectar repositorio de User
    // otros módulos...
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
