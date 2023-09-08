import { CreateUserDto, LoginUserDto } from "./dto/users.user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { User } from '.prisma/client';
interface FormatLogin extends Partial<User> {
    login: string;
}
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userDto: CreateUserDto): Promise<any>;
    findByLogin({ login, password }: LoginUserDto): Promise<FormatLogin>;
    findByPayload({ login }: any): Promise<any>;
}
export {};
