import { ExecutionContext, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import env from './config/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { RouterMiddleware } from './middlewares/router.middleware';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './helpers/shared/httpResponseError';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './controllers/auth/auth.service';
import { ScheduleController } from './controllers/schedule/schedule.controller';
import { ScheduleService } from './controllers/schedule/schedule.service';
import { RoomController } from './controllers/room/room.controller';
import { RoomService } from './controllers/room/room.service';
import configService from './config/database/database.service';
import ormconfig from './config/database/ormconfig';
const optionsDatabase: any = ormconfig

@Module({
    imports: [               
        TypeOrmModule.forRoot(optionsDatabase),
        TypeOrmModule.forFeature(configService.getEntites()),
        JwtModule.register({
            secret: env.jwtSecret,
            signOptions: { expiresIn: env.jwtTimeExpired }
        })      
    ],
    controllers: [
        AppController,
        AuthController,
        ScheduleController,
        RoomController
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpErrorFilter
        },        
        AppService,
        AuthService,
        ScheduleService,
        RoomService  
    ],
    exports: []
})

export class APIModule implements NestModule {
    configure(auth: MiddlewareConsumer) {
        auth
            .apply(RouterMiddleware)
            .exclude(
            { 
                path: '', 
                method: RequestMethod.GET 
            },            
            { 
                path: '/docs', 
                method: RequestMethod.GET 
            },
            { 
                path: '/auth', 
                method: RequestMethod.POST 
            })
            .forRoutes({
                path: '*',
                method: RequestMethod.ALL
            });
    }
}