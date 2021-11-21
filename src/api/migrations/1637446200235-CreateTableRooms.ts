import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableRooms1637446200235 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE rooms
            (
                id_room serial PRIMARY KEY,
                name character varying(200) NOT NULL,
                description text NOT NULL,
                address text NOT NULL,
                price double precision NOT NULL,
                address_public_place text NOT NULL,
                address_number integer NOT NULL,
                address_district character varying(100) NOT NULL,
                address_city character varying(200) NOT NULL,
                address_cep integer NOT NULL,
                address_uf character varying(2) NOT NULL,
                address_country character varying(150) NOT NULL,
                id_created uuid NOT NULL,
                id_updated uuid,
                created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
                updated_at timestamp(6) without time zone               
            )   
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
