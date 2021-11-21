import { BadRequestException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpResponse } from './../../helpers/types/http';
import { Repository } from 'typeorm';
import { Rooms } from './../../models/Rooms';
import { ok } from './../../helpers/http-helper';
import { Images } from './../../models/Images';
import { RoomResponseDTO } from './class/RoomResponse.dto';
import { RoomDTO } from './class/RoomDTO.dto';
import { Schedules } from './../../models/Schedules';
import { StatusSchedule } from '../../interfaces/statusSchedule.enum';

@Injectable()
export class RoomService {

    constructor(
        @InjectRepository(Rooms)
        private readonly roomRepository: Repository<Rooms>,

        @InjectRepository(Schedules)
        private readonly scheduleRepository: Repository<Schedules>,

        @InjectRepository(Images)
        private readonly imageRepository: Repository<Images>
    ) { }

    async listDetailsData(query: RoomDTO): Promise<HttpResponse | HttpException | any> {
        try {
            const resultRoomDetailsData: Array<Schedules> = await this.scheduleRepository.find({
                where: {
                    date: query.date,
                    status: StatusSchedule.DISPONIVEL
                }
            })

            if (resultRoomDetailsData.length > 0) {
                return ok(resultRoomDetailsData.map((result: Schedules) => {
                    return {
                        scheduleId: result.id_schedule,
                        roomId: result.id_room,
                        status: result.status,
                        date: result.date,
                        time_start: result.time_start,
                        time_end: result.time_end,
                        period: [
                            result.period_morning ? 'Manhã' :
                                result.period_evening ? 'Tarde' :
                                    result.period_night ? 'Noite' :
                                        ''
                        ],
                        created_at: result.created_at,
                        updated_at: result.updated_at
                    }
                }))
            }
            else {
                throw new BadRequestException('Empty Date Details Room!')
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    async listDetails(id: number): Promise<HttpResponse | HttpException> {
        try {
            const resultRoomDetails: Array<Rooms> = await this.roomRepository.find({
                where: {
                    id_room: id
                }
            })

            const resultImageDetails: Array<Images> = await this.imageRepository.find({
                where: {
                    id_room: id
                }
            })

            if (resultRoomDetails.length > 0) {
                const resultDTO: RoomResponseDTO = {
                    roomId: resultRoomDetails[0].id_room,
                    name: resultRoomDetails[0].name,
                    description: resultRoomDetails[0].description,
                    address: resultRoomDetails[0].address,
                    price: resultRoomDetails[0].price,
                    public_place: resultRoomDetails[0].address_public_place,
                    number: resultRoomDetails[0].address_number,
                    district: resultRoomDetails[0].address_district,
                    city: resultRoomDetails[0].address_city,
                    cep: resultRoomDetails[0].address_cep,
                    uf: resultRoomDetails[0].address_uf,
                    country: resultRoomDetails[0].address_country,
                    created_at: resultRoomDetails[0].created_at,
                    updated_at: resultRoomDetails[0].updated_at,
                    images: resultImageDetails.map(result => result.image)
                }
                return ok(resultDTO)
            }
            else {
                throw new BadRequestException('Empty Room')
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}
