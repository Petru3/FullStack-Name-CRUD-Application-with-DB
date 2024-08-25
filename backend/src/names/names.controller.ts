/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NamesService } from './names.service';
import { Name } from './name.entity';
import { CreateNameDto } from './create-name.dto';
import { UpdateNameDto } from './update-name.dto';

@Controller('api/data')
export class NamesController {
  constructor(
    private readonly nameService: NamesService
  ) {}

  @Get()
  async getAllNames() {
    return this.nameService.getAllNames();
  }

  @Post()
  async createName(@Body() createNameDto: CreateNameDto) {
    return this.nameService.createName(createNameDto);
  }

  @Put(':id')
  async updateName(@Param('id') id: string, @Body() updateNameDto: UpdateNameDto) {
    return this.nameService.updateName(id, updateNameDto);
  }

  @Delete(':id')
  async deleteName(@Param('id') id: string) {
    await this.nameService.deleteName(id);
    return { message: 'Name deleted successfully' };
  }
}
