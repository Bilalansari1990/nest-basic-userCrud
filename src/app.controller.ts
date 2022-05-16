import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { clearConfigCache } from 'prettier';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local.auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    console.log(req.user);

    return req.user;
  }


  // Get /protected
  @Get('protected')
  getHello(@Request() req): string {
    return req.person;
  }
}
