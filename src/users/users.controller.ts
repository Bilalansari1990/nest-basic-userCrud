import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  // Get All Users 
  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.userService.findAllUsers(name);
  }

  // Get All Users with Id
  @ApiOkResponse({ type: User, description: ' user Data' })
  @ApiBadRequestResponse()
  @Get(':id')
  getUsersById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.findUsersById(id);
    if (!user) throw new NotFoundException();
    return user;
  }

  // Create User
  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse()
  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.userService.createUser(body);
  }
}
