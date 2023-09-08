import { PrismaService } from 'src/prisma/prisma.service';
import { Genre } from '.prisma/client';
import { CreateGenreDto } from './dto/create-genre.dto';
export declare class GenreService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    create(data: CreateGenreDto): Promise<Genre>;
    remove(id: number): Promise<Genre>;
}
