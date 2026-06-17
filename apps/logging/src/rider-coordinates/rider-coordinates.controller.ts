import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
        @Get()
        getRiderCoordinate(){
        return 'Hello i am from rider coordinate'
        }
}
