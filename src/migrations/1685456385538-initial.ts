import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685456385538 implements MigrationInterface {
    name = 'Initial1685456385538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "orders_customers"`);
        await queryRunner.query(`CREATE TABLE "categories" ("category_id" SERIAL NOT NULL, "category_name" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_51615bef2cea22812d0dcab6e18" PRIMARY KEY ("category_id"))`);
        await queryRunner.query(`CREATE TABLE "feedbacks" ("feedback_id" SERIAL NOT NULL, "order_id" integer NOT NULL, "customer_id" integer NOT NULL, "feedback_date" character varying NOT NULL, "feedback" character varying NOT NULL, CONSTRAINT "PK_fbbc8db5ceefe347110a51c5659" PRIMARY KEY ("feedback_id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "ordersCustomerId" integer`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_time"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_time" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_c2a865d211d2c5a9f9041de3057" FOREIGN KEY ("ordersCustomerId") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_c2a865d211d2c5a9f9041de3057"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_time"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_time" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "ordersCustomerId"`);
        await queryRunner.query(`DROP TABLE "feedbacks"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "orders_customers" FOREIGN KEY ("customer_id") REFERENCES "customers"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
