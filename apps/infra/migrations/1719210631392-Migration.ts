import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1719210631392 implements MigrationInterface {
    name = 'Migration1719210631392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_maritalstatus_enum" AS ENUM('single', 'married', 'divorced', 'widowed')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying(29) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "created_by" character varying(120) NOT NULL, "updated_by" character varying(120) NOT NULL, "deleted_by" character varying(120), "name" character varying(120) NOT NULL, "last_name" character varying(120) NOT NULL, "phone_number" character varying(14) NOT NULL, "email" character varying(120) NOT NULL, "document" character varying(11) NOT NULL, "maritalStatus" "public"."users_maritalstatus_enum" NOT NULL, "birth_date" date, CONSTRAINT "UQ_17d1817f241f10a3dbafb169fd2" UNIQUE ("phone_number"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_c1b20b2a1883ed106c3e746c25a" UNIQUE ("document"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_maritalstatus_enum"`);
    }

}
