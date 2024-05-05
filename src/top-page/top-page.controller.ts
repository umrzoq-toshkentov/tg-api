import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() product: Omit<TopPageModel, '_id'>) {
    return 'Create';
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return 'GetById';
  }

  @Delete('delete')
  async delete(@Param('id') id: string) {
    return 'Delete';
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() product: TopPageModel) {
    return 'Update';
  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() page: FindTopPageDto) {
    return 'Find';
  }
}
