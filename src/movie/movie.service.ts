import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Movie, Prisma } from '.prisma/client';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
import { title } from 'process';


@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}

  async create(movie: CreateMovieDto): Promise<Movie> {
   let date=new Date(movie.release_date)
    const genres = movie.genres?.map((genre) => ({
      id: genre,
    }));

    return this.prisma.movie.create({
      data: {
        title: movie.title,
        description: movie.description,
        release_date:date,
        genres: {
          connect: genres,
        },
      },
      include: {
        genres:true
      },
    });
  
  }
  async findAll(): Promise<Movie[]> {
    return await this.prisma.movie.findMany({include: {
      genres:true
    },});
  }

  async findOne(id: number): Promise<Movie> {
    return await this.prisma.movie.findUnique({
      where: {
        id: id,
      },include: {
        genres:true
      },
    });
  }

  async update(id: number, data: UpdateMovieDto): Promise<Movie> {
    return await this.prisma.movie.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async remove(id: number): Promise<Movie> {
 let movie=await this.prisma.movie.findUnique({
      where: {
        id: id,
      }
    });
    if(!movie){
      throw new ConflictException('Movie doesnt exist');
    }
    return await this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }
//search movie 
async searchMovie(data:string): Promise<Movie[]> {
 
  return await this.prisma.movie.findMany({
    where: {
    title: data
    },
    include: {
      genres:true
    },
  });

}

  
}
