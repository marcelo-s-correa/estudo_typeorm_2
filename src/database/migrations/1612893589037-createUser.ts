import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1612893589037 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [{
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            },
            {
                name: 'nome',
                type: 'varchar'
            },
            {
                name: 'idade',
                type: 'integer'
            },
            {
                name: 'cidade',
                type: 'varchar'
            }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
