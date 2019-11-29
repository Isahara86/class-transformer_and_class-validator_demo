import 'reflect-metadata';
import { ArrayNotEmpty, IsArray, IsUUID, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
const uuidv4 = require('uuid/v4');

class SubscriptionDTO {
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID(undefined, { each: true })
    taskIds: string[]; // - this should be an array of uuids what should I add to validate this
}

const obj = {
    taskIds: [new uuidv4()],
};


const oClass = plainToClass(SubscriptionDTO, obj);

validateOrReject(oClass)
    .then(() => {
        console.log('****');
        console.log('************');
        console.log('SUCCESS');
        console.log('************');
        console.log('****');
    })
    .catch(console.log);
