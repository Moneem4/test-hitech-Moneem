"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MovieService = class MovieService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(movie) {
        let date = new Date(movie.release_date);
        const genres = movie.genres?.map((genre) => ({
            id: genre,
        }));
        return this.prisma.movie.create({
            data: {
                title: movie.title,
                description: movie.description,
                release_date: date,
                genres: {
                    connect: genres,
                },
            },
            include: {
                genres: true
            },
        });
    }
    async findAll() {
        return await this.prisma.movie.findMany({ include: {
                genres: true
            }, });
    }
    async findOne(id) {
        return await this.prisma.movie.findUnique({
            where: {
                id: id,
            }, include: {
                genres: true
            },
        });
    }
    async update(id, data) {
        return await this.prisma.movie.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async remove(id) {
        let movie = await this.prisma.movie.findUnique({
            where: {
                id: id,
            }
        });
        if (!movie) {
            throw new common_1.ConflictException('Movie doesnt exist');
        }
        return await this.prisma.movie.delete({
            where: {
                id: id,
            },
        });
    }
    async searchMovie(data) {
        return await this.prisma.movie.findMany({
            where: {
                title: data
            },
            include: {
                genres: true
            },
        });
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MovieService);
//# sourceMappingURL=movie.service.js.map