import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IResponse } from './app.controller';
import { AppConfigService } from './config/config.service';
import { User } from './database/entities/user.entity';

@Injectable()
export class AppService {
  constructor( private readonly appConfig: AppConfigService,@InjectRepository(User)
  private readonly userRepo: Repository<User>){}
  
  getHello(): IResponse {
    return {
      appName:this.appConfig.name,
      appPort:this.appConfig.port,
      appurl:this.appConfig.url
    }
  }
  getHello2(): string {
    return 'Hello World!';
  }
  async getAllUsers(): Promise<User[]>{
    return await this.userRepo.find(); 
  }
  async getUser(userId):Promise<User>{
    return await this.userRepo.findOne(userId);
  }
  async createUser(name:string,address:string,email:string,age:number):Promise<User>{
    return await this.userRepo.save({name,address,email,age});
  }

}
