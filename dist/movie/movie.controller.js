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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const movie_dto_1 = require("./dto/movie.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async findAll(res) {
        try {
            return await this.movieService.findAll();
        }
        catch (error) {
            return res.status(500).json({
                message: error,
            });
        }
    }
    async findOne(res, id) {
        try {
            var movie = await this.movieService.findOne(id);
            return (movie) ?
                res.status(common_1.HttpStatus.OK).json({
                    message: "Success",
                    movie: movie
                })
                : res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "Movie not found,check id !",
                });
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async create(res, createMovieDto) {
        try {
            return await this.movieService.create(createMovieDto);
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async update(res, id, updateMovieDto) {
        try {
            var movie = await this.movieService.findOne(id);
            (movie) ?
                res.status(common_1.HttpStatus.OK).json({
                    message: "Success",
                    movie: movie
                })
                : res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "Movie not found,check id !",
                });
            return await this.movieService.update(id, updateMovieDto);
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async remove(res, id) {
        try {
            var movie = await this.movieService.findOne(id);
            if (!movie) {
                return res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "Movie not found,check id !",
                });
            }
            return await this.movieService.remove(id);
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
    async finsearchMoviedOne(res, data) {
        try {
            var movies = await this.movieService.searchMovie(data);
            return (movies) ?
                res.status(common_1.HttpStatus.OK).json({
                    message: "Success",
                    movie: movies
                })
                : res.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: "no movie founded !",
                });
        }
        catch (error) {
            res.status(500).json({
                message: error,
            });
        }
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('/listMovie'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Get)('/oneMovie/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Post)('/createMovie'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, movie_dto_1.CreateMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)('/updateMovie/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, movie_dto_1.UpdateMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)('/deleteMovie/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiSecurity)('access-key'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, common_1.Get)('/searchMovie/'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "finsearchMoviedOne", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movie'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map