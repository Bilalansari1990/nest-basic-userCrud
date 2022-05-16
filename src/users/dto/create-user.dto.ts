import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsPositive, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false })
  // @IsAlphanumeric()
  // @MaxLength(10)
  // name?: string;
  @IsEmail()
  email?: string;
  @ApiProperty({ required: false })
  @IsPositive()
  age?: number;

}
