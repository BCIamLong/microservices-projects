import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { CreateUserDto } from '@app/users';

@Controller('users')
export class UsersServiceController {
  constructor(private readonly usersServiceService: UsersServiceService) {}

  @Get()
  getHello() {
    return this.usersServiceService.getHello();
  }

  @Post()
  createPost(@Body() dto: CreateUserDto) {
    // console.log(dto);
    console.log(dto);
    return this.usersServiceService.create(dto);
  }
}
