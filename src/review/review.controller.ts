import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
  @Post('create')
  async create(@Body() review: Omit<ReviewModel, '_id'>) {
    return 'Create';
  }

  @Delete('delete')
  async delete(@Param('id') id: string) {
    return 'Delete';
  }

  @Get('product/:id')
  async get(@Param('id') id: string) {
    return 'Get';
  }
}
