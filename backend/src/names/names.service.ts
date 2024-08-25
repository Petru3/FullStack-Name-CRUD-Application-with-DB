/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Name } from './name.entity';
import { CreateNameDto } from './create-name.dto';
import { UpdateNameDto } from './update-name.dto';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(Name)
    private readonly nameRepository: Repository<Name>
  ) {}

  async getAllNames(): Promise<Name[]> {
    return this.nameRepository.find();
  }

  async createName(createNameDto: CreateNameDto): Promise<Name> {
    const newName = this.nameRepository.create(createNameDto);
    return this.nameRepository.save(newName);
  }

  async updateName(id: string, updateNameDto: UpdateNameDto): Promise<Name> {
    const existingName = await this.nameRepository.findOne({where: {id: id}});
    if (!existingName) {
      throw new NotFoundException(`Name with id ${id} not found`);
    }
    const updatedName = { ...existingName, ...updateNameDto };
    return this.nameRepository.save(updatedName);
  }

  async deleteName(id: string): Promise<void> {
    const result = await this.nameRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Name with id ${id} not found`);
    }
  }
}
