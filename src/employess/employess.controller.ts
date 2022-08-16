import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundError } from 'rxjs';
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
        const user = this.employeeService.getOneEmployee(employeId)
        if (!user) throw new NotFoundError('Not Found')
        else return user
    }

    @ApiOkResponse()
    @ApiBadRequestResponse()
    @Patch(':employeId')
    async getOneEmployeeAndEdit(@Param('employeId') employeId: string): Promise<Employee> {
        const user = this.employeeService.getOneEmployeeAndEdit(employeId)
        if (!user) throw new NotFoundException()
        else return user
    }


    @Delete(':employeId')
    async getOneEmployeeAndDelete(@Param('employeId') employeId: string): Promise<Employee> {
        const res = this.employeeService.getOneEmployeeAndDelete(employeId)
        console.log(res);
        return
    }


}
