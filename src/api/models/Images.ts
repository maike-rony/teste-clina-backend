import { Column, CreateDateColumn, Entity,JoinColumn,OneToOne,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Rooms } from './Rooms';

@Entity({ name: 'images' })
export class Images {
  
    @PrimaryGeneratedColumn('uuid')
    uuid_image: string; 

    @Column({ type: 'int', nullable: false})
    id_room: number;

    @Column({ type: 'text', nullable: false})
    image: string;

    @Column({ type: 'uuid', nullable: false})
    id_created: string;

    @Column({ type: 'uuid', nullable: true})
    id_updated: string;

    @CreateDateColumn({ type: 'timestamp', precision: 6, nullable: false })
    created_at: Date;
        
    @UpdateDateColumn({ type: 'timestamp', precision: 6, nullable: true })
    updated_at: Date;

    @OneToOne(() => Rooms, { onDelete: 'CASCADE' })
    @JoinColumn({
        name: "id_room",
        referencedColumnName: "id_room"
    })
    rooms: Rooms;

}
