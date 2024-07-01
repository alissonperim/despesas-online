import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1719813303007 implements MigrationInterface {
    name = 'Migration1719813303007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "street" character varying(120) NOT NULL, "number" character varying(20) NOT NULL, "neighborhood" character varying(120) NOT NULL, "city" character varying(60) NOT NULL, "state" character varying(60) NOT NULL, "country" character varying(60) NOT NULL, "zip_code" character varying(9) NOT NULL, "complement" character varying(120), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_maritalstatus_enum" AS ENUM('single', 'married', 'divorced', 'widowed')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP WITH TIME ZONE, "created_by" character varying(120), "updated_by" character varying(120), "deleted_by" character varying(120), "name" character varying(120) NOT NULL, "last_name" character varying(120) NOT NULL, "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "birth_date" date, "maritalStatus" "public"."users_maritalstatus_enum" NOT NULL, "addressId" character varying, CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_c1b20b2a1883ed106c3e746c25a" UNIQUE ("document"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_maritalstatus_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
