import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { PostService } from '@services';
import { Post } from '@entities';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id', ParseIntPipe) id: number): Promise<Post> {
    const post = await this.postService.findOne(id);
    if (!post) throw new NotFoundException('Post does not exist!');

    return res.status(HttpStatus.OK).json(post);
  }
}
