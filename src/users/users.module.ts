import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, UserSechemaClass } from './schemas/user.schema';
import { UserRepositary } from './user.repositary';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepositary],
  imports: [MongooseModule.forFeature([{ name: UserSechemaClass.name, schema: UserSchema }])]
})
export class UsersModule { }
