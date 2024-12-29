/*
  Warnings:

  - Changed the type of `nota` on the `produtos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "nota",
ADD COLUMN     "nota" DOUBLE PRECISION NOT NULL;
