import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genre } from '.prisma/client';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    remove(id: number): Promise<Genre>;
}
