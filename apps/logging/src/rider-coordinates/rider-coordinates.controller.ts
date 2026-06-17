import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor(private coordinatsService: RiderCoordinatesService){}
    @Get()
    async getRiderCoordinates(){
        return this.coordinatsService.getRiderCoordinate();
    }
    @Post()
    async saveRiderCoordiantes(
        @Body()
        createCoordinateDTO: CreateCoordinatesDTO
    ){
        return this.coordinatsService.saveRiderCoordinates(createCoordinateDTO)
    }
}