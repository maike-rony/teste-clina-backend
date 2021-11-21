export interface ScheduleResponseDTO {
    scheduleId: number;
    roomId: number;
    status: string;
    date: Date;
    time_start: Date;
    time_end: Date;   
    period: Array<string>;
    created_at: Date;
    updated_at: Date;
  }