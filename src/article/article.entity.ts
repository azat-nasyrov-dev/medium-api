import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '@app/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'articles' })
export class ArticleEntity {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'fruit-chips', description: 'Name of slug' })
  @Column()
  slug: string;

  @ApiProperty({ example: 'nestjs', description: 'Title' })
  @Column()
  title: string;

  @ApiProperty({
    example: 'nestjs cool framework',
    description: 'Extensive information about',
  })
  @Column({ default: '' })
  description: string;

  @ApiProperty({
    example: 'something in the body',
    description: 'Some information in body',
  })
  @Column({ default: '' })
  body: string;

  @ApiProperty({ example: '10.04.23', description: 'Date of creation' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({ example: '10.04.23', description: 'Date of update' })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ApiProperty({ example: 'tag-some', description: 'List of tags' })
  @Column('simple-array')
  tagList: string[];

  @ApiProperty({ example: '7', description: 'Counting favorites' })
  @Column({ default: 0 })
  favoritesCount: number;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @ManyToOne(() => UserEntity, (user) => user.articles, { eager: true })
  author: UserEntity;
}
