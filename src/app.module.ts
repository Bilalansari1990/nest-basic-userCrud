import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';
import { AuthModule } from './auth/auth.module';
import { EmployessModule } from './employess/employess.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://bilal:199021bilal@cluster0.ytpju.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'), PersonsModule, AuthModule, EmployessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
