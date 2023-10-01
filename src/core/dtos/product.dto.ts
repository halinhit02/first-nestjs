import { IsIn, IsInt, IsNotEmpty, IsNumber, IsString, Min } from "@nestjs/class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    companyId: any;

    @IsInt()
    @Min(0)
    quantity: number;

    @IsInt()
    @Min(0)
    price: number;

    @IsInt()
    @Min(2000)
    year: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) { }