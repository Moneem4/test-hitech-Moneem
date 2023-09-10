import { PrismaService } from 'src/prisma/prisma.service';
import { Movie } from '.prisma/client';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
export declare class MovieService {
    private prisma;
    constructor(prisma: PrismaService);
    create(movie: CreateMovieDto): Promise<Movie>;
    findAll(): Promise<Movie[]>;
    findOne(id: number): Promise<Movie>;
    update(id: number, data: UpdateMovieDto): Promise<Movie>;
    remove(id: number): Promise<Movie>;
    searchMovie(data: string): Promise<Movie[]>;
}
