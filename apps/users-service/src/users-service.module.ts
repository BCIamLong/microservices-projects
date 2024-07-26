import { Module } from '@nestjs/common';
import { UsersServiceController } from './users-service.controller';
import { UsersServiceService } from './users-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: 'apps/users-service/.env',
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'sa',
    //   password: 'long21112002',
    //   database: 'UsersService',
    //   // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    //   extra: {
    //     trustServerCertificate: true,
    //   },
    //   // options: {
    //   //   // encrypt: false, // MSSQL-specific option
    //   //   trustServerCertificate: true,
    //   // },
    //   synchronize: true, //use this with development environment
    //   autoLoadEntities: true,
    //   // entities: [User],
    // }),

    //! UNLIKE PRISMA WHEN WE CONNECT TO THE DB IF THE DB IS NOT EXIST IT WILL AUTOMATICALLY RIGHT BUT WITH TYPEORM IT WILL NOT AUTOMATICALLY CREATE THAT DB
    // * THEREFORE WE WILL RUN TO AN ERROR LIKE: LOGIN USER SA(OR OTHER NAME) FAILED, SO THAT'S BECAUSE NOW IN OUR DB WE DON'T HAVE THAT DB YET
    // ! SO NOTICE THIS WHEN WE DEVELOP WITH TYPE ORM

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        // console.log(config.get('DB_PASSWORD'));
        return {
          type: 'mssql',
          host: config.get('DB_HOST'),
          port: +config.get('DB_PORT'),
          username: config.get('DB_USERNAME'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          entities: [User],
          options: {
            encrypt: false, // MSSQL-specific option
            trustServerCertificate: true,
          },
          synchronize: true, //use this with development environment

          // autoLoadEntities: true,
          // entities: [User],
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersServiceController],
  providers: [UsersServiceService],
})
export class UsersServiceModule {}
