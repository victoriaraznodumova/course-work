import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685955160088 implements MigrationInterface {
    name = 'Initial1685955160088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "customers_id_seq" OWNED BY "customers"."id"`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('"customers_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "is_done" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "customer" DROP NOT NULL`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "categories_category_id_seq" OWNED BY "categories"."category_id"`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "category_id" SET DEFAULT nextval('"categories_category_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "category_id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_0cbeaa99388cff58105554e3abf" FOREIGN KEY ("customer") REFERENCES "customers"("fullname") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_3df6307a199ce5bf0c99b1d8dd5" FOREIGN KEY ("category") REFERENCES "categories"("category_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_5c90dd8d5bb817724bf6d97eb49" FOREIGN KEY ("customer") REFERENCES "customers"("fullname") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_5c90dd8d5bb817724bf6d97eb49"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_3df6307a199ce5bf0c99b1d8dd5"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_0cbeaa99388cff58105554e3abf"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "category_id" SET DEFAULT nextval('categories_id_seq')`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "category_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "categories_category_id_seq"`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "customer" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "category" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "is_done" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('customers_customer_id_seq')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "customers_id_seq"`);
    }

}
