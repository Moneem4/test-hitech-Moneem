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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const create_genre_dto_1 = require("./dto/create-genre.dto");
let GenreController = class GenreController {
    constructor(genreService) {
        this.genreService = genreService;
    }
    async findAll(res) {
        try {
            return await this.genreService.findAll();
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async findOne(res, id) {
        try {
            var genre = await this.genreService.findOne(id);
            return (genre) ?
                res.status(common_1.HttpStatus.OK).json({
                    message: "Success",
                    genre: genre
                })
                : res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "Genre not found,check id !",
                });
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async create(res, createGenreDto) {
        try {
            return await this.genreService.create(createGenreDto);
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async remove(res, id) {
        try {
            var movie = await this.genreService.findOne(id);
            if (!movie) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "Genre not found,check id !",
                });
            }
            return await this.genreService.remove(id);
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
};
exports.GenreController = GenreController;
__decorate([
    (0, common_1.Get)('/listGenre'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/oneGenre/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/createGenre'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_genre_dto_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/deleteGenre/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "remove", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)('genre'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre.controller.js.map