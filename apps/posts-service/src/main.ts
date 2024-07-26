import { NestFactory } from '@nestjs/core';
import { PostsServiceModule } from './posts-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsServiceModule);
  console.log(3002);
  await app.listen(3002);
}
bootstrap();
