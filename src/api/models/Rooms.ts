import { Column, CreateDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'rooms' })
export class Rooms {
  
  @PrimaryGeneratedColumn('increment')
  id_room: number;

  @Column({ type: 'varchar', length: 200, nullable: false})
  name: string;

  @Column({ type: 'text', nullable: false})
  description: string;

  @Column({ type: 'text', nullable: false})
  address: string;

  @Column({ type: 'float', nullable: false})
  price: number;

  @Column({ type: 'text', nullable: false})
  address_public_place: string;

  @Column({ type: 'int', nullable: false})
  address_number: number;

  @Column({ type: 'varchar', length: 100, nullable: false})
  address_district: string;

  @Column({ type: 'varchar', length: 200, nullable: false})
  address_city: string;

  @Column({ type: 'int', nullable: false})
  address_cep: number;

  @Column({ type: 'varchar', length: 2, nullable: false})
  address_uf: string;

  @Column({ type: 'varchar', length: 150, nullable: false})
  address_country: string;  

  @Column({ type: 'uuid', nullable: false})
  id_created: string;

  @Column({ type: 'uuid', nullable: true})
  id_updated: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6, nullable: false })
  created_at: Date;
    
  @UpdateDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  updated_at: Date;

}
