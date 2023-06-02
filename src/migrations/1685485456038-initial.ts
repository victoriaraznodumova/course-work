import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685485456038 implements MigrationInterface {
    name = 'Initial1685485456038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "customers_id_seq" OWNED BY "customers"."id"`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('"customers_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_date"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_9bb53cb4c941553750b89f350e0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_9bb53cb4c941553750b89f350e0"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_772d0ce0473ac2ccfa26060dbe9"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_date"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('customers_customer_id_seq')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "customers_id_seq"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "order_id" integer NOT NULL`);
    }

}
