import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableImages1637446288545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE images
            (
                uuid_image uuid NOT NULL DEFAULT uuid_generate_v4(),
                id_room integer NOT NULL,
                image text NOT NULL,
                id_created uuid NOT NULL,
                id_updated uuid,
                created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
                updated_at timestamp(6) without time zone,
                CONSTRAINT "pk_uuid_image" PRIMARY KEY (uuid_image),             
                CONSTRAINT "fk_id_room" FOREIGN KEY (id_room)
                    REFERENCES rooms (id_room) MATCH SIMPLE
                    ON UPDATE NO ACTION
                    ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
