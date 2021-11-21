import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { ResponseBadRequestSwagger } from './helpers/swagger/httpBadRequest';
import { ResponseForbiddenSwagger } from './helpers/swagger/httpForbiddenError';
import { ResponseInternalServerErrorSwagger } from './helpers/swagger/httpInternalServerError';
import { ResponseSuccessSwagger } from './helpers/swagger/httpResponseSuccess';
import { ResponseUnauthorizedErrorSwagger } from './helpers/swagger/httpUnauthorized';
import { HttpResponse } from './helpers/types/http';

@ApiTags('Index')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    
    @Get()
    @ApiResponse({
        status: 200,
        description: "Success Response",
        type: ResponseSuccessSwagger
    })
    @ApiResponse({
        status: 400,
        description: "Missing Params and Invalid Fields",
        type: ResponseBadRequestSwagger
    })
    @ApiResponse({
        status: 401,
        description: "Unauthorized",
        type: ResponseUnauthorizedErrorSwagger
    })
    @ApiResponse({
        status: 404,
        description: "Access Denied Level",
        type: ResponseForbiddenSwagger
    })
    @ApiResponse({
        status: 500,
        description: "Internal Server Error",
        type: ResponseInternalServerErrorSwagger
    })
    async index (): Promise<HttpResponse> { 
        return this.appService.getHealthCheck()
    }
}
