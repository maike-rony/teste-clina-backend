import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ok } from './../../helpers';
import { HttpResponse } from '../../helpers/types/http';
import { AuthService } from './auth.service';
import { LoginDTO } from './class/LoginDTO.dto';
import { Users } from './../../models/Users';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post()   
    @ApiResponse({
        status: 200,
        description: "Success Login Response"       
    })
    async auth(@Body() login: LoginDTO): Promise<HttpResponse> { 
        const resultAuth: Users = await this.authService.auth(login)
        
        if (resultAuth) {                       
            return ok({          
                token: (await this.authService.generatedJWT(resultAuth))
            })
        }
        else {
            throw new UnauthorizedException('Invalid Access!')           
        }
    }

}
