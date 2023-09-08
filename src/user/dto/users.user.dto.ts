import {IsNotEmpty} from 'class-validator';

import {ApiProperty} from "@nestjs/swagger";
export class LoginUserDto {
    @ApiProperty()
    @IsNotEmpty() readonly login: string;

    @ApiProperty()
    @IsNotEmpty() readonly password: string;
}
export class CreateUserDto {
   
    @IsNotEmpty()
    @ApiProperty() login: string;

    @ApiProperty()
    @IsNotEmpty() password: string;

}
