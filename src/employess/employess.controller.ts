import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployessService } from './employess.service';
import { Employee } from './schemas/employee.schema';


@ApiTags('Employess')
@Controller('employess')
export class EmployessController {
    constructor(private employeeService: EmployessService) {
    }
    @ApiOkResponse()
    @ApiBadRequestResponse()
    @Post()
    async createEmployee(@Body() body: CreateEmployeeDto): Promise<Employee> {
        return this.employeeService.createNewEmployee(body.name, body.email, body.phone, body.department, body.company, body.position)
    }

    @ApiOkResponse()
    @ApiBadRequestResponse()
    @Get()
    async getEmployees(): Promise<Employee[]> {
        return this.employeeService.getEmployees()
    }

    @ApiOkResponse()
    @ApiBadRequestResponse()
    @Get(':employeId')
    async getOneEmployee(@Param("employeId") employeId: string): Promise<Employee> {
        return this.employeeService.getOneEmployee(employeId)
    }

}
