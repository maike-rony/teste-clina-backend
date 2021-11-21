import { Body, Controller, Get, HttpException, Param, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '../../decorator/auth.decorator';
import { AuthGuard } from '../../auth/auth.guard';
import { HttpResponse } from '../../helpers/types/http';
import { ScheduleDTO } from './class/ScheduleDTO.dto';
import { ScheduleService } from './schedule.service';

@ApiBearerAuth()
@ApiTags('Schedule')
@UseGuards(AuthGuard)
@Controller('schedule')
export class ScheduleController {

    constructor(
        private readonly scheduleService: ScheduleService       
    ) {}

    @Get(':id')   
    @ApiResponse({
        status: 200,
        description: "List Rooms Reserved"       
    })
    async listRoom(@Param() params): Promise<HttpResponse | HttpException> {         
        return this.scheduleService.listRoomId(params.id)
    }

    @Post()   
    @ApiResponse({
        status: 200,
        description: "Success Schedule Reserved"       
    })
    async save(@Body() schedule: ScheduleDTO, @Auth() auth: ITokenJWT): Promise<HttpResponse | HttpException> {         
        return this.scheduleService.save(schedule, auth)
    }    
}
