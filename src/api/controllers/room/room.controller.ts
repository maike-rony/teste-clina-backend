import { Controller, Get, HttpException, Param, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/api/auth/auth.guard';
import { HttpResponse } from 'src/api/helpers/types/http';
import { RoomDTO } from './class/RoomDTO.dto';
import { RoomService } from './room.service';

@ApiBearerAuth()
@ApiTags('Room')
@UseGuards(AuthGuard)
@Controller('room')
export class RoomController {

    constructor(
        private readonly roomService: RoomService       
    ) {}

    @Get()
    @ApiQuery({ 
        name: 'date',
        type: Date
    })   
    @ApiResponse({
        status: 200,
        description: "Data Rooms Details for Data"       
    })
    async listDetailsData(@Query() query: RoomDTO): Promise<HttpResponse | HttpException> {                
        return this.roomService.listDetailsData(query)
    }

    @Get(':id')   
    @ApiResponse({
        status: 200,
        description: "Data Rooms Details"       
    })
    async listDetails(@Param() params): Promise<HttpResponse | HttpException> {         
        return this.roomService.listDetails(params.id)
    }
   
    
}
