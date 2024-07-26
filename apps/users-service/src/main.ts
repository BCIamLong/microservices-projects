import { NestFactory } from '@nestjs/core';
import { UsersServiceModule } from './users-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersServiceModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'http://localhost:3002',
    credentials: true,
  });
  console.log(3001);
  await app.listen(3001);
}
bootstrap();
