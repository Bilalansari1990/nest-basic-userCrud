import { Injectable } from '@nestjs/common';
import { EmployeeRepositary } from './employee.repositary';
import { Employee } from './schemas/employee.schema';

@Injectable()
export class EmployessService {
    constructor(private employeeRepositary: EmployeeRepositary) {

    }
    async createNewEmployee(name: string, email: string, phone: number, department: string, company: string, position: string) {
        return this.employeeRepositary.create({
            name,
            email,
            phone,
            department,
            company,
            position
        })
    }

    async getEmployees(): Promise<Employee[]> {
        return this.employeeRepositary.findAll({})
    }

    async getOneEmployee(_id): Promise<Employee> {
        return this.employeeRepositary.findOne({ _id })
    }

    async getOneEmployeeAndEdit(_id): Promise<Employee> {
        return this.employeeRepositary.findOneAndEdit({ _id })
    }
    async getOneEmployeeAndDelete(_id): Promise<Employee> {
        return this.employeeRepositary.findOneAndDelete({ _id })
    }
}
