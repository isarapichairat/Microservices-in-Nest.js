import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { first } from 'rxjs';
import { MessageEvent } from 'node:http';
import { MessagePattern } from '@nestjs/microservices';
import { resolve } from 'node:path';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  //@Get(':id')
  @MessagePattern({cmd:'get-rider'})
  async getRiderById(
    data: any
  ) {
     return Promise.resolve({ 
      id: data.id, 
      firstName: 'Jane', 
      lastName: 'Doe', 
      email: 'jane@gmail.com' })
  }
}
