import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685462940827 implements MigrationInterface {
    name = 'Initial1685462940827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "feedbacks" ("feedback_id" SERIAL NOT NULL, "order_id" integer NOT NULL, "customer_id" integer NOT NULL, "feedback_date" character varying NOT NULL, "feedback" character varying NOT NULL, CONSTRAINT "PK_fbbc8db5ceefe347110a51c5659" PRIMARY KEY ("feedback_id"))`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "categories_pkey"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "category_id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "category_name" character varying NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "customers_id_seq" OWNED BY "customers"."id"`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('"customers_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_time"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_294b1cfc5609f963232318d0a44" FOREIGN KEY ("customer_id", "customer_id", "customer_id") REFERENCES "customers"("name","surname","phone_number") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_294b1cfc5609f963232318d0a44"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_time"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_time" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "customer_id"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "customer_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('customers_customer_id_seq')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "customers_id_seq"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "category_name"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "PK_51615bef2cea22812d0dcab6e18"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "feedbacks"`);
    }

}
