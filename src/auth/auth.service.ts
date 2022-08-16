import { Injectable } from '@nestjs/common';
import { PersonsService } from 'src/persons/persons.service';

@Injectable()
export class AuthService {
  constructor(private personService: PersonsService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const person = await this.personService.findOne(username);

    if (person && person.password === password) {
      const { password, username, ...rest } = person;
      return rest;
    }
    return null;
  }
}
