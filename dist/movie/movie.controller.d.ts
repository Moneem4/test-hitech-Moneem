import { MovieService } from './movie.service';
import { CreateMovieDto, UpdateMovieDto } from './dto/movie.dto';
import { Movie } from '.prisma/client';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(res: any): Promise<Movie[]>;
    findOne(res: any, id: number): Promise<Movie>;
    create(res: any, createMovieDto: CreateMovieDto): Promise<Movie>;
    update(res: any, id: number, updateMovieDto: UpdateMovieDto): Promise<Movie>;
    remove(res: any, id: number): Promise<Movie>;
    finsearchMoviedOne(res: any, data: string): Promise<Movie>;
}
