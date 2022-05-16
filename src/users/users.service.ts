import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepositary } from './user.repositary';
import { UserSechemaClass } from "./schemas/user.schema"
import { v4 as uuidv4 } from 'uuid'
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(private userRepositary: UserRepositary) { }
  private users: User[] = [
    {
      id: 0,
      name: 'Bilal',
    },
    {
      id: 1,
      name: 'Umer',
    },
    {
      id: 2,
      name: 'Hamza',
    },
  ];


  // Mongoss Functions 
  async getAllUserById(userId: string): Promise<UserSechemaClass> {
    return this.userRepositary.findOne({ userId })
  }

  async getUsers(): Promise<UserSechemaClass[]> {
    return this.userRepositary.find({});
  }
  async createNewUser(email: string, age: number): Promise<UserSechemaClass> {
    return this.userRepositary.create({
      email,
      age,
    })
  }
  // async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UserSechemaClass> {
  //   return this.userRepositary.findOneAndUpdate({ userId }, updateUserDto);
  // }

  // Customer function for Dummy Data
  // findAllUsers(name?: string): User[] {
  //   if (name) return this.users.filter(user => user.name === name)
  //   return this.users;
  // }

  // findUsersById(userId: number): User {
  //   return this.users.find((user) => user.id === userId);
  // }

  // createUser(createUserDto: CreateUserDto): User {
  //   const newUser = {
  //     id: Date.now(),
  //     ...createUserDto,
  //   };
  //   this.users.push(newUser);
  //   return newUser;
  // }
}
