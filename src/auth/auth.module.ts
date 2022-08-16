import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PersonsModule } from 'src/persons/persons.module';
import { PassportModule } from '@nestjs/passport';
import { localStrategy } from './local.strategy';

@Module({
  imports: [PersonsModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, localStrategy],
})
export class AuthModule {}
