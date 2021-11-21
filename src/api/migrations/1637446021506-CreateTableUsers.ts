import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUsers1637446021506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE users
            (
                uuid_user uuid NOT NULL DEFAULT uuid_generate_v4(),
                name character varying(200) NOT NULL,
                email character varying(200) NOT NULL,
                password text NOT NULL,
                avatar text NOT NULL,
                created_at timestamp(6) without time zone NOT NULL DEFAULT now(),
                updated_at timestamp(6) without time zone,
                CONSTRAINT "pk_uuid_user" PRIMARY KEY (uuid_user)
            )        
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
