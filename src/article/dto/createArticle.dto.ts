import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ example: 'nestjs', description: 'Title' })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    example: 'nestjs cool framework',
    description: 'Extensive information about',
  })
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({
    example: 'something in the body',
    description: 'Some information in body',
  })
  @IsNotEmpty()
  readonly body: string;

  @ApiProperty({ example: 'tag-some', description: 'List of tags' })
  @IsOptional()
  readonly tagList?: string[];
}
