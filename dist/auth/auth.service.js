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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwtService, usersService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async register(userDto) {
        let status = {
            success: true,
            message: "ACCOUNT_CREATE_SUCCESS",
        };
        try {
            status.data = await this.usersService.create(userDto);
        }
        catch (err) {
            status = {
                success: false,
                message: err,
            };
        }
        return status;
    }
    async login(loginUserDto) {
        const user = await this.usersService.findByLogin(loginUserDto);
        const token = this._createToken(user);
        return {
            ...token,
            data: user
        };
    }
    _createToken({ login }) {
        const user = { login };
        const Authorization = this.jwtService.sign(user);
        return {
            expiresIn: process.env.EXPIRESIN,
            Authorization,
        };
    }
    async validateUser(payload) {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new common_1.HttpException("INVALID_TOKEN", common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        user_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map