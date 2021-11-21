import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertRooms1637450015063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` 
            INSERT INTO "rooms" (
                id_room,
                name,
                description,
                address,
                price,
                address_public_place,
                address_number,
                address_district,
                address_city,
                address_cep,
                address_uf,
                address_country,
                id_created,
                id_updated,
                created_at,
                updated_at)
            VALUES (
                1,
                'Sala Av. Silvia Jardim - 01',
                '80m2',
                'Av Silvia Jardim',
                80,
                '',
                1205,
                'Hauer',
                'Curitiba',
                123456,                
                'PR',  
                'Brasil',
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                DEFAULT,
                null
            ),
            (
                2,
                'Sala Av. Rebouças - 15',
                '850m2',
                'Av Rebouças',
                150.15,
                '',
                1305,
                'Boqueirão',
                'Curitiba',
                13254546,
                'PR',      
                'Brasil',                          
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                DEFAULT,
                null
            ); 
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}


