import { AuthService, RegistrationStatus } from "./auth.service";
import { CreateUserDto, LoginUserDto } from "../user/dto/users.user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<RegistrationStatus>;
    login(loginUserDto: LoginUserDto): Promise<any>;
}
