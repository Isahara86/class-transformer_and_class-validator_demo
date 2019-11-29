import 'reflect-metadata';
import { IsString, ValidateIf, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';


class Class {
    @IsString()
    @ValidateIf(o => !o.dataOpt2)
    data1: string;

    @IsString()
    @ValidateIf(o => !o.data1)
    dataOpt2: string;
}

const o = {
    dataOpt2: 'string',
};

const oClass = plainToClass(Class, o);

validateOrReject(oClass)
    .then(() => {
        console.log('****');
        console.log('************');
        console.log('SUCCESS');
        console.log('************');
        console.log('****');
    })
    .catch(console.log);
