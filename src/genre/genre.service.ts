import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Genre } from '.prisma/client';
import { CreateGenreDto } from './dto/create-genre.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Genre[]> {
    return await this.prisma.genre.findMany();
  }

  async findOne(id: number): Promise<Genre> {
    return await this.prisma.genre.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(data: CreateGenreDto): Promise<Genre> {
    const genreFound=await this.prisma.genre.findUnique({
      where: {
        name: data.name,
      },
    });
    if(genreFound){
      throw new ConflictException('Genre already exist');
    }
    return await this.prisma.genre.create({ data });
  }

  async remove(id: number): Promise<Genre> {
   
    return await this.prisma.genre.delete({
      where: { id: id },
      
    });
  }

  
}
