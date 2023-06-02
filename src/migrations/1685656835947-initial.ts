import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1685656835947 implements MigrationInterface {
    name = 'Initial1685656835947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "order_id"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "orderIdId" integer`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "customers_id_seq" OWNED BY "customers"."id"`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('"customers_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_date"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_text"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_text" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_0c174205485eca4f54fbf17687e" FOREIGN KEY ("orderIdId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_0c174205485eca4f54fbf17687e"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "order_date"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "order_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_text"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_text" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "feedback_date"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "feedback_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "comment" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "age" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" SET DEFAULT nextval('customers_customer_id_seq')`);
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "customers_id_seq"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP COLUMN "orderIdId"`);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD "order_id" integer NOT NULL`);
    }

}
