import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
  } from '@nestjs/common';
  import { GenreService } from './genre.service';
  import { CreateGenreDto } from './dto/create-genre.dto';
  import { Genre, Prisma } from '.prisma/client';
  import { UpdateGenreDto } from './dto/update-genre.dto';
  
  @Controller('genre')
  export class GenreController {
    constructor(private readonly genreService: GenreService) {}
  
    @Get('/listGenre')
    @UsePipes(ValidationPipe)
    async findAll(): Promise<Genre[]> {
      return await this.genreService.findAll();
    }
  
    @Get('/oneGenre/:id')
    @UsePipes(ValidationPipe)
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
      return await this.genreService.findOne(id);
    }
  
    @Post('/createGenre')
    @UsePipes(ValidationPipe)
    async create(@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
      return await this.genreService.create(createGenreDto);
    }
  
   
  

    @Delete('/deleteGenre/:id')
    @UsePipes(ValidationPipe)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
      return await this.genreService.remove(id);
    }
  }
  