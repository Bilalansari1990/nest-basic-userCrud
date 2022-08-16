import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, IsNumber, MaxLength } from "class-validator";

export class CreateEmployeeDto {

    @ApiProperty({ required: true })
    @IsAlpha()
    @MaxLength(50)
    name: string;

    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true })
    @MaxLength(50)
    department: string;

    @ApiProperty({ required: true })
    @IsNumber()
    phone: number;

    @ApiProperty({ required: true })
    @MaxLength(50)
    position: string;


    @ApiProperty({ required: true })
    @MaxLength(50)
    company: string;


}