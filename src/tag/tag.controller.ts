import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TagEntity } from '@app/tag/tag.entity';

@ApiTags('Tags')
@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @ApiOperation({ summary: 'Getting all tags' })
  @ApiResponse({ status: 200, type: [TagEntity] })
  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
