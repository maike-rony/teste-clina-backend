import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertUsers1637446467966 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {                
        await queryRunner.query(` 
            INSERT INTO "users"(
                "uuid_user", 
                "name", 
                "email", 
                "password", 
                "avatar", 
                "created_at", 
                "updated_at"
            ) 
            VALUES (
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                'Clina Teste',
                'clina@clina.com',
                'teste',
                'https://portal.ifba.edu.br/profept/externas/edital-no-02-2020-profept-novo-professores-integram-o-corpo-docente-da-ia-ifba/avatar-neutro.png/@@images/image.png',
                '2021-11-20T22:59:45.557Z',
                null
            ),
            (
                '90221529-594d-435a-8e71-fe1f9e30e265',
                'Reserva',
                'reserva@clina.com',
                'teste',
                'https://portal.ifba.edu.br/profept/externas/edital-no-02-2020-profept-novo-professores-integram-o-corpo-docente-da-ia-ifba/avatar-neutro.png/@@images/image.png',
                '2021-11-20T22:59:45.557Z',
                null
            );        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
