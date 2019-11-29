import { Car } from './Car';
import { UserRolesEnum } from './user-roles.enum';
import {
    ArrayNotEmpty,
    IsArray,
    IsEnum,
    IsIn,
    IsInt,
    IsOptional,
    IsString,
    Min,
    ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class User {

    @IsOptional()
    @IsInt()
    id = 1;

    @IsString()
    name: string;

    @IsInt()
    @Min(21)
    age: number;

    @IsIn(Object.values(UserRolesEnum))
    role: UserRolesEnum;

    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Car)
    @ValidateNested({ each: true })
    cars: Car[];

    getTotalCarsPrice(): number {
        return this.cars.reduce((acc: number, car: Car) => (acc + car.price), 0);
    }

}
