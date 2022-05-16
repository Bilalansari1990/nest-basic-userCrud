import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty({ required: false })
    @IsAlphanumeric()
    // @MaxLength(10)
    // name?: string;
    foods?: string[];
    age?: number;

}
