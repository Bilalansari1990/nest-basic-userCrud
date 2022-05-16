import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type UserDocument = UserSechemaClass & Document;
@Schema()
export class UserSechemaClass {

    @Prop({ unique: true })
    email: string;

    @Prop()
    age: number;

    // @Prop([String])
    // foods: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserSechemaClass);