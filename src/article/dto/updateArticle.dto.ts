import { ApiProperty } from '@nestjs/swagger';

export class UpdateArticleDto {
  @ApiProperty({ example: 'nestjs', description: 'Title' })
  readonly title: string;

  @ApiProperty({
    example: 'nestjs cool framework',
    description: 'Extensive information about',
  })
  readonly description: string;

  @ApiProperty({
    example: 'something in the body',
    description: 'Some information in body',
  })
  readonly body: string;

  @ApiProperty({ example: 'tag-some', description: 'List of tags' })
  readonly tagList?: string[];
}
