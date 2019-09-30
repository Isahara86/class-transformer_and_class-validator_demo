import { Contains, IsDate, IsEmail, IsFQDN, IsInt, IsString, Length, Max, Min, MinLength } from 'class-validator';

export class Post {

    @Length(10, 20)
    title: string;

    @MinLength(3)
    @Contains('hello')
    text: string;

    @IsInt()
    @Min(0)
    @Max(10)
    rating: number;

    @IsEmail()
    email: string;

    @IsFQDN()
    site: string;

    @IsDate()
    createDate: Date = new Date();

}
