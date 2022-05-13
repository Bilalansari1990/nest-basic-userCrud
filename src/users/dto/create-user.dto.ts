import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsAlphanumeric()
  @MaxLength(10)
  name?: string;

}
