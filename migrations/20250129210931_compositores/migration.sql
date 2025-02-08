/*
  Warnings:

  - You are about to drop the column `participacao` on the `Musica` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Musica" DROP COLUMN "participacao",
ADD COLUMN     "compositor" TEXT;
