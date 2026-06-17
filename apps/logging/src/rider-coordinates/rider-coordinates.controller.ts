import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
        constructor(private riderCoordinateService: RiderCoordinatesService){}
        @Get()
        getRiderCoordinate() {
                return 'Hello i am from rider coordinate'
        }

        @Post()
        saveRiderCoordinates(
                @Body()
                createCoordinatesDTO: CreateCoordinatesDTO
        ) {
                return this.riderCoordinateService.saveRiderCoordinates(createCoordinatesDTO)


        }
}
