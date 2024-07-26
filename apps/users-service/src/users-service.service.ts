import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from '@app/users';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersServiceService {
  constructor(
    // * we need to use InjectRepository to inject the repository and also set up the  TypeOrmModule.forFeature([Post]) in the import of the module we want to use
    // *  TypeOrmModule.forFeature([Post]) so basically this setup will create our user repository, and to inject that we need to use the entity inject InjectRepository(Entity) like type inject right to use the feature of repository like method find, create... so like mongoose right
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  getHello() {
    return this.usersRepository.find();
  }

  async create(dto: CreateUserDto) {
    const newUser = this.usersRepository.create({ ...dto, userId: 5 });
    return this.usersRepository.save(newUser);
  }
}
