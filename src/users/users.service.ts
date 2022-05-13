import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
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
  findAllUsers(name?: string): User[] {
    if (name) return this.users.filter(user => user.name === name)
    return this.users;
  }

  findUsersById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: Date.now(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
}
