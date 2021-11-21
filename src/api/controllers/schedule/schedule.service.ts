import { BadRequestException, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { created, ok } from '../../helpers/http-helper';
import { HttpResponse } from '../../helpers/types/http';
import { Schedules } from '../../models/Schedules';
import { Repository } from 'typeorm';
import { ScheduleDTO } from './class/ScheduleDTO.dto';
import { StatusSchedule } from '../../interfaces/statusSchedule.enum'
import { ScheduleResponseDTO } from './class/ScheduleResponse.dto';

@Injectable()
export class ScheduleService {

    constructor(
        @InjectRepository(Schedules)
        private readonly scheduleRepository: Repository<Schedules>
    ) { }

    async listRoomId(id: number): Promise<HttpResponse | HttpException> {
        try {
            const resultListRoom: Array<Schedules> = await this.scheduleRepository.find({
                where: {
                    id_room: id,
                    status: StatusSchedule.RESERVADO
                }
            })

            if (resultListRoom.length > 0) {
                const resultDTO: ScheduleResponseDTO = {
                    scheduleId: resultListRoom[0].id_schedule,
                    roomId: resultListRoom[0].id_room,
                    status: resultListRoom[0].status,
                    date: resultListRoom[0].date,
                    time_start: resultListRoom[0].time_start,
                    time_end: resultListRoom[0].time_end,
                    period: [
                        resultListRoom[0].period_morning ? 'Manhã' :
                            resultListRoom[0].period_evening ? 'Tarde' :
                                resultListRoom[0].period_night ? 'Noite' :
                                    ''
                    ],
                    created_at: resultListRoom[0].created_at,
                    updated_at: resultListRoom[0].updated_at,
                }
                return ok(resultDTO)
            }
            else {
                throw new BadRequestException('Empty Reserved Room')
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    async save(schedule: ScheduleDTO, auth: ITokenJWT): Promise<HttpResponse | HttpException> {
        try {
            const reservedSchedule = await this.scheduleRepository.find({
                where: {
                    id_schedule: schedule.scheduleId,
                    status: StatusSchedule.DISPONIVEL
                }
            })

            if (reservedSchedule.length > 0) {
                const resultUpdate = await this.scheduleRepository
                    .createQueryBuilder('schedules')
                    .update(Schedules)
                    .set({
                        status: StatusSchedule.RESERVADO,
                        id_updated: auth.uuid_user,
                        updated_at: new Date()
                    })
                    .where('id_schedule=:id_schedule', {
                        id_schedule: schedule.scheduleId
                    })
                    .execute()

                if (resultUpdate.affected>0) {
                    return ok({
                        roomReserved: true
                    })
                }
                else {
                    return ok({
                        roomReserved: false
                    })
                }
            }
            else {
                throw new BadRequestException('Already Reserved Room')
            }

        }
        catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}
