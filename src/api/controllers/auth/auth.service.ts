import { ExecutionContext, Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { validateHashPassword } from '../../utils/functions/validateHashPassword';
import { Repository } from 'typeorm';
import { LoginDTO } from './class/LoginDTO.dto';
import { Users } from '../../models/Users';

@Injectable()
export class AuthService {

    constructor(   
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,            
        private readonly jwtService: JwtService
    ) { }

    async auth(login: LoginDTO): Promise<Users | null> {
        try {
            const resultUser = await this.userRepository
                .createQueryBuilder('users')
                .select('users.uuid_user, users.name, users.email, users.password')
                .where('email=:email', {
                    email: login.email
                })
                .getRawOne()
                
            if (resultUser && validateHashPassword(resultUser.password) == login.password) {
                return resultUser;
            }
            else {
                return null
            }
        }
        catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async generatedJWT(user: Users): Promise<String> {
        try {                   
            return this.jwtService.sign({
                uuid_user: user.uuid_user,
                name: user.name,
                email: user.email
            })
        }
        catch (error) {
            throw new InternalServerErrorException(error.message)
        }
    }

    async listAll(): Promise<Object> {
        return this.userRepository.find()
    }


}
