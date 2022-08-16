import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserSechemaClass, UserDocument } from './schemas/user.schema';
import { Model, FilterQuery } from 'mongoose';
@Injectable()
export class UserRepositary {
  constructor(
    @InjectModel(UserSechemaClass.name) private userModel: Model<UserDocument>,
  ) {}

  // Mongoss Functions
  async findOne(
    userFilter: FilterQuery<UserSechemaClass>,
  ): Promise<UserSechemaClass> {
    return this.userModel.findOne(userFilter);
  }

  async find(
    userFilter: FilterQuery<UserSechemaClass>,
  ): Promise<UserSechemaClass[]> {
    return this.userModel.find(userFilter);
  }

  async create(user: UserSechemaClass): Promise<UserSechemaClass> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  async findOneAndUpdate(
    userFilter: FilterQuery<UserSechemaClass>,
    user: Partial<UserSechemaClass>,
  ): Promise<UserSechemaClass[]> {
    return this.userModel.findOneAndUpdate(userFilter, user);
  }
}
