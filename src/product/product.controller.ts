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
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() product: Omit<ProductModel, '_id'>) {
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
  async update(@Param('id') id: string, @Body() product: ProductModel) {
    return 'Update';
  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() product: FindProductDto) {
    return 'Find';
  }
}
