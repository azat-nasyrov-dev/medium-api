import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'follows' })
export class FollowEntity {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '3', description: 'ID follower' })
  @Column()
  followerId: number;

  @ApiProperty({ example: '5', description: 'ID following' })
  @Column()
  followingId: number;
}
