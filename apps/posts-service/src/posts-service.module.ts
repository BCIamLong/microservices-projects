import { Module } from '@nestjs/common';
import { PostsServiceService } from './posts-service.service';
import { PostsServiceController } from './posts-service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: 'apps/posts-service/.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      options: {
        encrypt: false, // MSSQL-specific option
        trustServerCertificate: true,
      },
      synchronize: true, //use this with development environment
      // autoLoadEntities: true,
      entities: [Post],
    }),
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostsServiceController],
  providers: [PostsServiceService],
})
export class PostsServiceModule {}
