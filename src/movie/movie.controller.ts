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
    ClassSerializerInterceptor,
    UseGuards,
    UseInterceptors,
    Res,
    HttpStatus,
  } from '@nestjs/common';
  import { MovieService } from './movie.service';
  import {  CreateMovieDto,UpdateMovieDto } from './dto/movie.dto';
 
  import { Movie } from '.prisma/client';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  
  @Controller('movie')
  export class MovieController {
    constructor(private readonly movieService: MovieService) {}
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @UsePipes(ValidationPipe)
    @ApiBearerAuth()
    @Get('/listMovie')
    async findAll(@Res() res): Promise<Movie[]> {
      try {
        return await this.movieService.findAll();
      } catch (error) {
      return  res.status(500).json({
          message: error,
      })    
      }
     
    }
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @ApiBearerAuth()
    @UsePipes(ValidationPipe)
    @Get('/oneMovie/:id')
  
    async findOne(@Res() res,@Param('id', ParseIntPipe) id: number): Promise<Movie> {
     try {
      var movie= await this.movieService.findOne(id);
      return  (movie)?
          res.status(HttpStatus.OK).json({
          message: "Success",
          movie:movie
      })
      :   res.status(HttpStatus.NOT_FOUND).json({
        message: "Movie not found,check id !",
    })
    
  } catch (error) {
    res.status(500).json({
      message: error,
  })
   } 
    }
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @ApiBearerAuth()
    @UsePipes(ValidationPipe)
    @Post('/createMovie')

    async create(@Res() res,@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
     try {
      return await this.movieService.create(createMovieDto);
     } catch (error) {
      res.status(500).json({
        message: error,
    })
     }
      
    }
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @UsePipes(ValidationPipe)
    @ApiBearerAuth()
    @Patch('/updateMovie/:id')
    async update(@Res() res,
      @Param('id', ParseIntPipe) id: number,
      @Body() updateMovieDto: UpdateMovieDto,
    ): Promise<Movie> {
      try {
        var movie= await this.movieService.findOne(id);
          (movie)?
            res.status(HttpStatus.OK).json({
            message: "Success",
            movie:movie
        })
        :   res.status(HttpStatus.NOT_FOUND).json({
          message: "Movie not found,check id !",
      })
        return await this.movieService.update(id, updateMovieDto);  
      } catch (error) {
        res.status(500).json({
          message: error,
      }) 
      }
      
    }
  
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
  
    @UsePipes(ValidationPipe)
    @ApiBearerAuth()
    @Delete('/deleteMovie/:id')
    async remove(@Res() res,@Param('id', ParseIntPipe) id: number): Promise<Movie> {
      try {
        var movie= await this.movieService.findOne(id);
       if(!movie) {return res.status(HttpStatus.NOT_FOUND).json({
        message: "Movie not found,check id !",
    })}
        return await this.movieService.remove(id);  
      } catch (error) {
        res.status(500).json({
          message: error,
      })  
      }
     
    }
    @UseGuards(JwtAuthGuard)
    @ApiSecurity('access-key')
    @UseInterceptors(ClassSerializerInterceptor)
    @ApiBearerAuth()
    @UsePipes(ValidationPipe)
    @Get('/searchMovie/')
  
    async finsearchMoviedOne(@Res() res,@Body()data:string): Promise<Movie> {
     try {
      var movies= await this.movieService.searchMovie(data);
      return  (movies)?
          res.status(HttpStatus.OK).json({
          message: "Success",
          movie:movies
      })
      :   res.status(HttpStatus.NOT_FOUND).json({
        message: "no movie founded !",
    })
    
  } catch (error) {
    res.status(500).json({
      message: error,
  })
   } 
    }
  }
  