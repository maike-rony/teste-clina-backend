import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertSchedules1637525907686 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` 
            INSERT INTO "schedules"(
                id_schedule, 
                id_room, 
                status, 
                date, 
                time_start, 
                time_end, 
                period_morning, 
                period_evening, 
                period_night, 
                id_created, 
                id_updated, 
                created_at
            ) VALUES (
                1, 
                1, 
                'Disponível', 
                '2021-11-21', 
                '12:00:00', 
                '13:00:00', 
                false, 
                true, 
                false, 
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003', 
                null, 
                'now()'                
            ),
            (
                2, 
                1, 
                'Disponível', 
                '2021-11-21', 
                '14:00:00', 
                '15:00:00', 
                false, 
                true, 
                false, 
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003', 
                null, 
                'now()'                
            ),
            (
                3, 
                2, 
                'Disponível', 
                '2021-11-20', 
                '10:00:00', 
                '11:00:00', 
                true, 
                false, 
                false, 
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003', 
                null, 
                'now()'                
            ),
            (
                4, 
                2, 
                'Disponível', 
                '2021-11-20', 
                '16:00:00', 
                '17:00:00', 
                false, 
                true, 
                false, 
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003', 
                null, 
                'now()'                
            );        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
