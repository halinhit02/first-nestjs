import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCompanyDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    field: string;
    @IsString()
    @IsNotEmpty()
    address: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) { }