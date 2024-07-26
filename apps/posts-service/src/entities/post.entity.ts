import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryColumn()
  postId: number;

  @Column({ name: 'title', length: 60, nullable: false })
  title: string;

  @Column({ name: 'description', length: 120, nullable: false })
  description: string;

  // * because we use microservice and database per service technique we can't make the relationship to the user table right so we can't set the foreign key... right
  @Column({ name: 'userId', type: 'int', nullable: false })
  userId: number;
}
