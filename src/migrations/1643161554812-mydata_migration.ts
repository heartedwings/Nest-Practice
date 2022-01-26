import {MigrationInterface, QueryRunner} from "typeorm";

export class mydataMigration1643161554812 implements MigrationInterface {
    name = 'mydataMigration1643161554812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mydata" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, "pass" character varying(100) NOT NULL, "mail" character varying(100), "age" integer NOT NULL, CONSTRAINT "PK_088791d34f11c288a9e68c03ca3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mydata"`);
    }

}
