import { Injectable } from '@nestjs/common';
import { CreatePostDto, UpdatePostDto } from '@app/posts/dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class PostsServiceService {
  constructor(
    @InjectRepository(Post) private readonly postsRepository: Repository<Post>,
    private readonly httpService: HttpService,
  ) {}
  async create({ description, title }: CreatePostDto) {
    // console.log(dto);
    console.log(description, title);
    const { userId } = await this.createUser({
      name: 'test_user',
      email: 'test@gmail.com',
      password: '123456',
    });
    console.log(userId);

    const newPost = this.postsRepository.create({
      description,
      title,
      userId,
      postId: 1,
    });
    return this.postsRepository.save(newPost);
  }

  findAll() {
    return this.postsRepository.find();
  }

  findOne(id: number) {
    return this.postsRepository.findOneBy({ postId: id });
  }

  update(id: number, updatePostsServiceDto: UpdatePostDto) {
    console.log(updatePostsServiceDto);
    return `This action updates a #${id} postsService`;
  }

  remove(id: number) {
    return `This action removes a #${id} postsService`;
  }

  async createUser(user: any) {
    //   const request1 = new Request('http://localhost:3001/users', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(user),
    //   });
    // console.log(user);
    console.log(user);
    const data = await axios.post('http://localhost:3001/users', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(data.data);
    return data.data as any;
  }
}
