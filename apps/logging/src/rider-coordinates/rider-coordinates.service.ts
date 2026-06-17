import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinate.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
        constructor(
                @InjectModel(RiderCoordinate.name)
                private readonly riderCoordinameModel : Model<RiderCoordinate>
        ){}
        async saveRiderCoordinates(createCoordinatesDTO: CreateCoordinatesDTO) {
                return await this.riderCoordinameModel.create(createCoordinatesDTO)
        }
}
