import { ApiProperty} from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class ScheduleDTO {
  
  @ApiProperty({
    type: Number
  })
  @IsNotEmpty()
  @IsInt()
  readonly scheduleId: number;
 
}