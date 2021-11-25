export interface ScheduleResponseDTO {
    scheduleId: number;
    roomId: number;
    status: string;
    date: string;
    time_start: Date;
    time_end: Date;   
    period: string;
    created_at: Date;
    updated_at: Date;
  }