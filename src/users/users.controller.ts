import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserSechemaClass } from "./schemas/user.schema"

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  // Get All Users 
  // @ApiOkResponse({ type: User, isArray: true })
  // @ApiQuery({ name: 'name', required: false })
  // @Get()
  // getUsers(@Query('name') name?: string): User[] {
  //   // return this.userService.findAllUsers(name);
  // }

  @Get()
  async getUsers(): Promise<UserSechemaClass[]> {
    return this.userService.getUsers();
  }
  // Get All Users with Id
  @ApiOkResponse({ type: User, description: ' user Data' })
  @ApiBadRequestResponse()
  @Get(':userId')
  async getUsersById(@Param('userId') id: string): Promise<UserSechemaClass> {
    const user = this.userService.getAllUserById(id);
    if (!user) throw new NotFoundException();
    return user;
  }
  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<UserSechemaClass> {
    return this.userService.createNewUser(body.email, body.age);
  }
  // Create User
  // @ApiCreatedResponse({ type: User })
  // @ApiBadRequestResponse()
  // @Post()
  // createUser(@Body() body: CreateUserDto): User {
  //   return this.userService.createUser(body);
  // }
}
