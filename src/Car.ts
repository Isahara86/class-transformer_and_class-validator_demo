import { CarBrandsEnum } from './car-brands.enum';
import { IsIn, IsNumber, IsString, Min } from 'class-validator';

export class Car {
    @IsIn(Object.values(CarBrandsEnum))
    brand: CarBrandsEnum;

    @IsString()
    model: string;

    @IsNumber()
    @Min(0)
    price: number;
}
