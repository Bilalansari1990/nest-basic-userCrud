import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

export type Person = {
  id: number;
  name: string;
  username: string;
  password: string
}

@Injectable()
export class PersonsService {
  private readonly persons: Person[] = [
    {
      id: 1,
      name: 'bilal',
      username: 'ansari',
      password: '123'
    },
    {
      id: 2,
      name: "Umar",
      username: "ansari",
      password: "1234"
    }
  ]
  async findOne(username: string): Promise<Person | undefined> {
    return this.persons.find(user => user.username === username)
  }

  // create(createPersonDto: CreatePersonDto) {
  //   return 'This action adds a new person';
  // }

  // findAll() {
  //   return `This action returns all persons`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} person`;
  // }

  // update(id: number, updatePersonDto: UpdatePersonDto) {
  //   return `This action updates a #${id} person`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} person`;
  // }
}
