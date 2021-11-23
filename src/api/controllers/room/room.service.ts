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

    async listDetailsData(query: RoomDTO): Promise<HttpResponse | HttpException> {
        try {
            const resultRoomDetailsData: any = await this.roomRepository
                .createQueryBuilder('rooms')
                .select('schedules.id_schedule scheduleId, rooms.id_room roomId, rooms.name, rooms.description, rooms.address, rooms.price, rooms.address_public_place, rooms.address_number')
                .addSelect('rooms.address_district district, rooms.address_city city, rooms.address_cep cep, rooms.address_uf uf, rooms.address_country country')
                .addSelect('schedules.status status')
                .addSelect('images.image image')
                .innerJoin(Schedules, "schedules", "schedules.id_room = rooms.id_room")
                .innerJoin(Images, "images", "images.id_room = rooms.id_room")
                .where('schedules.status=:status and schedules.date=:date', {
                    status: StatusSchedule.DISPONIVEL,
                    date: query.date
                })
                .distinctOn(['rooms.id_room'])
                .orderBy('rooms.id_room', 'ASC')
                .getRawMany()


            if (resultRoomDetailsData.length > 0) {
                return ok(resultRoomDetailsData)
            }
            else {
                throw new BadRequestException('Empty Date Details Room!')
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message)
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
            throw new InternalServerErrorException(error.message)
        }
    }
}
