import 'reflect-metadata';
import { plainToClass, Type } from 'class-transformer';
import { User } from './User';
import { IsInt, IsNumber, Matches, Min, validate, validateOrReject } from 'class-validator';


const plainObject = {
    name: 'John Doe',
    age: 35,
    role: 'customer',
    cars: [
        { brand: 'sfgklfdjgdsflk', model: 'X3', price: 22000 }
    ]
};

const user = plainToClass(User, plainObject);

// validate(user).then(errors => { // errors is an array of validation errors
//     if (errors.length > 0) {
//         console.log('validation failed. errors: ', errors);
//     } else {
//         console.log('validation succeed', 'user cars cost',user.getTotalCarsPrice());
//     }
// });


async function test() {
    try {
        await validateOrReject(user);
        console.log('************');
        console.log('************');
        console.log(1111);
        console.log('************');
        console.log('************');
    } catch (e) {
        console.log(JSON.stringify(e));
    }
}

test();


class ListQueryDto {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    readonly limit: number = 11;
}

const tempQuery: ListQueryDto = plainToClass(ListQueryDto, { limit: -100 });
console.log('Modified => ', tempQuery);

async function test2() {
    try {
        await validateOrReject(tempQuery);
        console.log('SUCCESS')
    } catch (e) {
        console.log(JSON.stringify(e));
    }
}

test2();


