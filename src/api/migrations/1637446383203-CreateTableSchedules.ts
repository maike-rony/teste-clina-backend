import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableSchedules1637446383203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE public.schedules
            (
                id_schedule serial PRIMARY KEY,
                id_room integer NOT NULL,
                status character varying(60) NOT NULL,
                date timestamp(6) with time zone NOT NULL,
                time_start TIME NOT NULL,
                time_end TIME NOT NULL,
                period_morning boolean NOT NULL,
                period_evening boolean NOT NULL,
                period_night boolean NOT NULL,
                id_created uuid NOT NULL,
                id_updated uuid,
                created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
                updated_at timestamp(6) without time zone,                         
                CONSTRAINT "fk_id_room" FOREIGN KEY (id_room)
                    REFERENCES rooms (id_room) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE NO ACTION
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
