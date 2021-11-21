import { Column, CreateDateColumn, Entity,PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'users' })
export class Users {
  
  @PrimaryGeneratedColumn('uuid')
  uuid_user: string; 

  @Column({ type: 'varchar', length: 200, nullable: false})
  name: string;

  @Column({ type: 'varchar', length: 200, nullable: false})
  email: string;

  @Column({ type: 'text', nullable: false})
  password: string;

  @Column({ type: 'text', nullable: false})
  avatar: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6, nullable: false })
  created_at: Date;
    
  @UpdateDateColumn({ type: 'timestamp', precision: 6, nullable: true })
  updated_at: Date;

}
