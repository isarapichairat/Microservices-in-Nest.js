import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
        @Get()
        getRiderCoordinate(){
        return 'Hello i am from rider coordinate'
        }

        @Post()
        saveRiderCoordinates(
                @Body()
                createCoordinatesDTO: CreateCoordinatesDTO
        ){
                return createCoordinatesDTO


        }
}
