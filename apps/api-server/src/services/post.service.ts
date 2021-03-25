import { Injectable } from '@nestjs/common';
import { Post } from '@entities';
import { getMongoRepository } from 'typeorm';

@Injectable()
export class PostService {
  async findAll(): Promise<Post[]> {
    return await getMongoRepository(Post).find({});
  }

  async findOne(id: number): Promise<Post> {
    return await getMongoRepository(Post).findOne({
      id,
    });
  }
}
