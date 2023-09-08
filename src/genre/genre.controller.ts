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
    Res,
    HttpStatus,
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
    async findAll(@Res() res): Promise<Genre[]> {
      try {
        return await this.genreService.findAll(); 
      } catch (error) {
        res.status(500).json({
          message: error,
      })    
      }
    
    }
  
    @Get('/oneGenre/:id')
    @UsePipes(ValidationPipe)
    async findOne(@Res() res,@Param('id', ParseIntPipe) id: number): Promise<Genre> {
      try {
        var genre= await this.genreService.findOne(id);
        return  (genre)?
            res.status(HttpStatus.OK).json({
            message: "Success",
            genre:genre
        })
        :   res.status(HttpStatus.NOT_FOUND).json({
          message: "Genre not found,check id !",
      })
        
      } catch (error) {
        res.status(500).json({
          message: error,
      })   
      }
    }
  
    @Post('/createGenre')
    @UsePipes(ValidationPipe)
    async create(@Res() res,@Body() createGenreDto: CreateGenreDto): Promise<Genre> {
     try {
      return await this.genreService.create(createGenreDto);
     } catch (error) {
      res.status(500).json({
        message: error,
    })  
     }
      
    }
  
   
  

    @Delete('/deleteGenre/:id')
    @UsePipes(ValidationPipe)
    async remove(@Res() res,@Param('id', ParseIntPipe) id: number): Promise<Genre> {
      try {
        var movie= await this.genreService.findOne(id);
        if(!movie) {return res.status(HttpStatus.NOT_FOUND).json({
         message: "Genre not found,check id !",
     })}
     return await this.genreService.remove(id);
      } catch (error) {
        res.status(500).json({
          message: error,
      })   
      }
     
    }
  }
  