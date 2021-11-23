import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RouterMiddleware implements NestMiddleware {

    constructor(
        private readonly jwtService: JwtService
    ) { }

    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization
        if (!token) {
            throw new UnauthorizedException('Missing Token!')            
        }
        else {
            try {
                const tokenJWT = token.split(' ')
                const jwVerify = this.jwtService.verify(tokenJWT[1])
                if (jwVerify) {                   
                    req.auth = {
                        uuid_user: jwVerify.uuid_user,
                        name: jwVerify.name,
                        email: jwVerify.email 
                    }
                    const dNow = new Date();
                    console.log(`Usuário: ${jwVerify.email} Solicitou API! ${dNow.getDate()}/${dNow.getMonth() + 1}/${dNow.getFullYear()} ${dNow.getHours()}:${dNow.getMinutes()}`)
                    next();
                }
                else {
                    throw new UnauthorizedException('Invalid Token!')    
                }

            }
            catch (erro) {                
                throw new UnauthorizedException('Token Expired!')    
            }
        }
    }
}
