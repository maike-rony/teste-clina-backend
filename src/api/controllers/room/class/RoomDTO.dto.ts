import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsDateString } from 'class-validator';

export class RoomDTO {
  
  @ApiProperty({
    type: Date
  })
  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;
  
}