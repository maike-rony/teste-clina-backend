import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly jwtService: JwtService
  ) { }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = request.headers.authorization

      if (!token) {
        return false;
      }
      else {
        const tokenJWT = token.split(' ')
        const jwtVerify = this.jwtService.verify(tokenJWT[1])     
        return jwtVerify ? true : false        
      }
    }
    catch (erro) {
      console.log(erro)
      return false;
    }
  }

}


