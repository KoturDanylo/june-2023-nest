import { MigrationInterface, QueryRunner } from "typeorm";

export class BaseStructure1709213351313 implements MigrationInterface {
    name = 'BaseStructure1709213351313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refresh-tokens" ADD "deviceId" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "refresh-tokens" DROP COLUMN "deviceId"`);
    }

}
