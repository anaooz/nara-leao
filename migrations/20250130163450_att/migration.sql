/*
  Warnings:

  - You are about to drop the column `musicaId` on the `Plataforma` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plataforma" DROP CONSTRAINT "Plataforma_musicaId_fkey";

-- AlterTable
ALTER TABLE "Plataforma" DROP COLUMN "musicaId",
ALTER COLUMN "spotify" DROP NOT NULL,
ALTER COLUMN "deezer" DROP NOT NULL,
ALTER COLUMN "appleMusic" DROP NOT NULL;
