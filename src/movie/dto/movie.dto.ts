import { Prisma } from '.prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateMovieDto {
 @IsString()
 @MaxLength(30)  
 @IsNotEmpty()
   title: string;
  @IsString()
  @MaxLength(30)  
  @IsNotEmpty()
   description: string;

  @IsNotEmpty()
  release_date: Date;

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  genres: number[];

}
export class UpdateMovieDto {
  @IsNotEmpty()
    title: string;
   @IsOptional()
    description: string;
    @IsOptional()
   release_date: Date;

 
 }

