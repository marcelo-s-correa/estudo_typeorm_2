import {MigrationInterface, QueryRunner} from "typeorm";

export class createInstituicoes1613068745281 implements MigrationInterface {
    name = 'createInstituicoes1613068745281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "colegios" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "cursos" character varying NOT NULL, "graduados" character varying NOT NULL, CONSTRAINT "PK_0ae630c636087aa3e5cbe45326f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "universidades" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "graduacoes" character varying NOT NULL, "mestres" character varying NOT NULL, "doutores" character varying NOT NULL, CONSTRAINT "PK_2ef936b4a4d8b31ff8659cf0a12" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "universidades"`);
        await queryRunner.query(`DROP TABLE "colegios"`);
    }

}
