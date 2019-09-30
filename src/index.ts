import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { User } from './User';
import { validate } from 'class-validator';

const plainObject = {
    name: 'John Doe',
    age: 35,
    role: 'customer',
    cars: [
        {brand: 'bmw', model: 'X3', price: 22000}
    ]
};

const user = plainToClass(User, plainObject);

validate(user).then(errors => { // errors is an array of validation errors
    if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
    } else {
        console.log('validation succeed', 'user cars cost',user.getTotalCarsPrice());
    }
});

