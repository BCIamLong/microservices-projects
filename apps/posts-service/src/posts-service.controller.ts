import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsServiceService } from './posts-service.service';
import { CreatePostDto, UpdatePostDto } from '@app/posts/dto';

@Controller('posts')
export class PostsServiceController {
  constructor(private readonly postsServiceService: PostsServiceService) {}

  @Post()
  create(@Body() createPostsServiceDto: CreatePostDto) {
    return this.postsServiceService.create(createPostsServiceDto);
  }

  @Get()
  findAll() {
    return this.postsServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostsServiceDto: UpdatePostDto,
  ) {
    return this.postsServiceService.update(+id, updatePostsServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsServiceService.remove(+id);
  }
}
