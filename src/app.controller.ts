import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';
import { User } from './database/entities/user.entity';

export interface IResponse {
  appName: string;
  appurl: string;
  appPort: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IResponse {
    return this.appService.getHello();
  }

  @Get('/saludos')
  getHello2(): string {
    return this.appService.getHello2();
  }
  @Get('users/')
  getAllUsers(): Promise<User[]> {
    return this.appService.getAllUsers();
  }
  @Get('users/:userId')
  getUser(@Param('userId') userId: number): Promise<User> {
    return this.appService.getUser(userId);
  }

  @Post('add/queries')
  create(
    @Query('name')name:string,
    @Query('address')address:string,
    @Query('email')email:string,
    @Query('age')age:number):Promise<User>{
    return this.appService.createUser(name,address,email,age);
  }

  @Post('add/params/name/:name/address/:addres/email/:email/ege/:age')
  createUserParam(
    @Param('name')name:string,
    @Param('address')address:string,
    @Param('email')email:string,
    @Param('age')age:number):Promise<User>{
     return this.appService.createUser(name,address,email,age)
  }

  @Post('add/body')
  createUser(
    @Body('name')name:string,
    @Body('address')addres:string,
    @Body('email')email:string,
    @Body('age')age:number,
  ):Promise<User>{
    return this.appService.createUser(name,addres,email,age)
  }
  

}
