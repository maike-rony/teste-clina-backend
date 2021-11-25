import { Column, CreateDateColumn, Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Rooms } from './Rooms';

@Entity({ name: 'schedules' })
export class Schedules {
  
  @PrimaryGeneratedColumn('increment')
  id_schedule: number;

  @Column({ type: 'int', nullable: false})
  id_room: number;

  @Column({ type: 'varchar', length: 60, nullable: false})
  status: string;

  @Column({ type: 'timestamp with time zone', precision: 6, nullable: false })
  date: string;

  @Column({ type: 'time', nullable: false })
  time_start: Date;

  @Column({ type: 'time', nullable: false })
  time_end: Date;

  @Column({ type: 'boolean', nullable: false})
  period_morning: boolean;

  @Column({ type: 'boolean', nullable: false})
  period_evening: boolean;

  @Column({ type: 'boolean', nullable: false})
  period_night: boolean; 
 
  @Column({ type: 'uuid', nullable: false})
  id_created: string;

  @Column({ type: 'uuid', nullable: true})
  id_updated: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6, nullable: false })
  created_at: Date;
    
  @UpdateDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  updated_at: Date;

  @OneToOne(() => Rooms)
  @JoinColumn({
      name: "id_room",
      referencedColumnName: "id_room"
  })
  rooms: Rooms;

}
