import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployessController } from './employess.controller';
import { EmployessService } from './employess.service';
import { EmployeeSchemas, Employee } from './schemas/employee.schema';
import { EmployeeRepositary } from './employee.repositary';

@Module({
  controllers: [EmployessController],
  providers: [EmployessService, EmployeeRepositary],
  imports: [MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchemas }])]
})
export class EmployessModule { }
