/*
  Warnings:

  - You are about to drop the column `accountId` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `payerId` on the `Expense` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_payerId_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "accountId";
ALTER TABLE "Expense" DROP COLUMN "payerId";
