import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Person, PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { ApiTags } from '@nestjs/swagger';



@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) { }

  @Post()
  create(@Body() person: Person) {
    console.log(person, "hlw");

    return this.personsService.findOne(person.username);
  }

  // @Get()
  // findAll() {
  //   return this.personsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personsService.update(+id, updatePersonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personsService.remove(+id);
  // }
}
