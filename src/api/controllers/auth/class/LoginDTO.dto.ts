import { ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  
  @ApiProperty({
    type: String
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    type: String
  })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
   
}