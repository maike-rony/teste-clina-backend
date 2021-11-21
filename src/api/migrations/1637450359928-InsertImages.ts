import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertImages1637450359928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(` 
            INSERT INTO "images"(
                "uuid_image", 
                "id_room", 
                "image", 
                "id_created", 
                "id_updated", 
                "created_at", 
                "updated_at"
            ) VALUES (
                '63936992-b77d-4e74-a404-b1e7d6f8dd47',
                1,
                'https://a-static.mlcdn.com.br/618x463/quadro-parede-decoracao-sala-cozinha-natureza-podium/lojapodium/paisagens364/9149bb11054ace5aab61ca7370406df3.jpg',               
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                default,
                null
            ),
            (
                'f83eb286-6198-4893-8d1f-a511b3cd9d31',
                1,
                'https://img.elo7.com.br/product/zoom/20DC4F5/quadro-decorativo-cidade-del-paz-decoracao-de-parede-de-sala-presentes-para-os-filhos.jpg',                
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                default,
                null
            ),
            (
                '7d353c80-2312-4f9e-98dc-111d7862d972',
                2,
                'https://blog.mobly.com.br/wp-content/uploads/2019/07/sala-para-conversar-18.jpg',
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                default,
                null
            ),
            (
                'b13dbe29-c848-46d9-8430-47d3ccce8933',
                2,
                'https://blog.mobly.com.br/wp-content/uploads/2019/07/sala-para-conversar-30.jpg',
                'c5f9d32a-4a1e-11ec-81d3-0242ac130003',
                null,
                default,
                null
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
