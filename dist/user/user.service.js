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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userDto) {
        const userInDb = await this.prisma.user.findFirst({
            where: { login: userDto.login }
        });
        if (userInDb) {
            throw new common_1.HttpException("user_already_exist", common_1.HttpStatus.CONFLICT);
        }
        return await this.prisma.user.create({
            data: { ...(userDto),
                password: await (0, bcrypt_1.hash)(userDto.password, 10) }
        });
    }
    async findByLogin({ login, password }) {
        const user = await this.prisma.user.findFirst({
            where: { login }
        });
        if (!user) {
            throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await (0, bcrypt_1.compare)(password, user.password);
        if (!areEqual) {
            throw new common_1.HttpException("invalid_credentials", common_1.HttpStatus.UNAUTHORIZED);
        }
        const { password: p, ...rest } = user;
        return rest;
    }
    async findByPayload({ login }) {
        return await this.prisma.user.findFirst({
            where: { login }
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=user.service.js.map