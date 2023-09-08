import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from '.prisma/client';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findAll(res: any): Promise<Genre[]>;
    findOne(res: any, id: number): Promise<Genre>;
    create(res: any, createGenreDto: CreateGenreDto): Promise<Genre>;
    remove(res: any, id: number): Promise<Genre>;
}
