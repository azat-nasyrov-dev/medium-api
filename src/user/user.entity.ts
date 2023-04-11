import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { ArticleEntity } from '@app/article/article.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class UserEntity {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'john@gmail.com', description: 'Email' })
  @Column()
  email: string;

  @ApiProperty({ example: 'John', description: 'Username' })
  @Column()
  username: string;

  @ApiProperty({ example: 'user biography', description: 'Biography' })
  @Column({ default: '' })
  bio: string;

  @ApiProperty({ example: 'image', description: 'User Photo' })
  @Column({ default: '' })
  image: string;

  @ApiProperty({ example: '123', description: 'User password' })
  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToMany(() => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[];

  @ManyToMany(() => ArticleEntity)
  @JoinTable()
  favorites: ArticleEntity[];
}
