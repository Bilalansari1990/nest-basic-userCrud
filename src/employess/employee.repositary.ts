import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { EmployeeDocument, Employee } from "./schemas/employee.schema";

@Injectable()
export class EmployeeRepositary {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {

    }
    //Mongoos Functions
    async create(emplyee: Employee) {
        const newEmployee = new this.employeeModel(emplyee)
        return newEmployee.save()
    }

    async findAll(employeeFilter: FilterQuery<Employee>): Promise<Employee[]> {
        return this.employeeModel.find(employeeFilter)
    }

    async findOne(employeeFilter: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findById(employeeFilter)
    }
    async findOneAndEdit(employeeFilter: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findByIdAndUpdate(employeeFilter)
    }

    async findOneAndDelete(employeeFilter: FilterQuery<Employee>): Promise<Employee> {
        return this.employeeModel.findByIdAndDelete(employeeFilter)
    }


}