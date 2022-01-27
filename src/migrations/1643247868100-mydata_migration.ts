import { MigrationInterface, QueryRunner } from 'typeorm';

export class mydataMigration1643247868100 implements MigrationInterface {
  name = 'mydataMigration1643247868100';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mydata"(
          "id" SERIAL NOT NULL,
          "name" character varying(20) NOT NULL,
          "age" integer NOT NULL,
          "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
          "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "PK_088791d34f11c288a9e68c03ca3"
          PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "mydata"`);
  }
}
