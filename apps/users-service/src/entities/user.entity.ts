import {
  Column,
  Entity,
  // Generated,
  // Index,
  PrimaryColumn,
  // Unique,
} from 'typeorm';

// @Unique(['userId'])
@Entity('users')
export class User {
  // @Index()
  // @Column()
  // @Generated('increment')
  // * we can have the way to create the auto increment id in TypeORM by doing like above
  // * https://github.com/typeorm/typeorm/issues/1517 we can read more here or google
  @PrimaryColumn()
  userId: number;

  @Column({ name: 'name', length: 60, nullable: false })
  name: string;

  @Column({ name: 'email', length: 60, nullable: false })
  email: string;

  @Column({ name: 'password', length: 120, nullable: false })
  password: string;
}
