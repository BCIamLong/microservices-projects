import { Test, TestingModule } from '@nestjs/testing';
import { PostsServiceController } from './posts-service.controller';
import { PostsServiceService } from './posts-service.service';

describe('PostsServiceController', () => {
  let controller: PostsServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsServiceController],
      providers: [PostsServiceService],
    }).compile();

    controller = module.get<PostsServiceController>(PostsServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
