/*
  Warnings:

  - You are about to drop the column `enddate` on the `TravelRecord` table. All the data in the column will be lost.
  - You are about to drop the column `startdate` on the `TravelRecord` table. All the data in the column will be lost.
  - Added the required column `title` to the `TravelRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterSequence
ALTER SEQUENCE "Expense_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "TravelRecord_id_seq" MAXVALUE 9223372036854775807;

-- AlterSequence
ALTER SEQUENCE "UserJoinedTravelRecord_id_seq" MAXVALUE 9223372036854775807;

-- AlterTable
ALTER TABLE "TravelRecord" DROP COLUMN "enddate";
ALTER TABLE "TravelRecord" DROP COLUMN "startdate";
ALTER TABLE "TravelRecord" ADD COLUMN     "title" STRING NOT NULL;
