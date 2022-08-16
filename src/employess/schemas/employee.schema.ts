import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type EmployeeDocument = Employee & Document
@Schema()
export class Employee {
    @Prop()
    name: string;

    @Prop({ unique: true })
    email: string;


    @Prop()
    department: string;


    @Prop()
    phone: number;


    @Prop()
    position: string;


    @Prop()
    company: string;
}
export const EmployeeSchemas = SchemaFactory.createForClass(Employee)