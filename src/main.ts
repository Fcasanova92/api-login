/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function app() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // lanza error si vienen propiedades no deseadas
      transform: true, //  Transforma el payload a una instancia del DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
app();
