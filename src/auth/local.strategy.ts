import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }
    async validate(username: string, password: string): Promise<any> {
        const person = await this.authService.validateUser(username, password);

        if (!person) {
            throw new UnauthorizedException()
        }
        return person;
    }

}