-- AlterSequence
ALTER SEQUENCE "Account_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "Trasaction_id_seq" MAXVALUE 9223372036854775807;

-- AlterTable
ALTER TABLE "Trasaction" ADD COLUMN     "ref" STRING;
