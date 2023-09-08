import { UsersService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto, LoginUserDto } from "../user/dto/users.user.dto";
import { JwtPayload } from "./jwt.strategy";
import { PrismaService } from "../prisma/prisma.service";
import { User } from '@prisma/client';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly usersService;
    constructor(prisma: PrismaService, jwtService: JwtService, usersService: UsersService);
    register(userDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<any>;
    private _createToken;
    validateUser(payload: JwtPayload): Promise<any>;
}
export interface RegistrationStatus {
    success: boolean;
    message: string;
    data?: User;
}
export interface RegistrationSeederStatus {
    success: boolean;
    message: string;
    data?: User[];
}
