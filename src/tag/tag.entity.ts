import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tags' })
export class TagEntity {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'nestjs', description: 'Tag name' })
  @Column()
  name: string;
}
