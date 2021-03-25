import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity({
  name: 'posts',
  orderBy: {
    createdAt: 'ASC',
  },
})
export class Post {
  @PrimaryColumn()
  id: number;

  @Column()
  userId: string;

  @Column({ default: ''})
  title: string;

  @Column({ default: '' })
  body: string;
}
