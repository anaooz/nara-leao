/*
  Warnings:

  - You are about to drop the column `engenheiroSom` on the `FichaTecnica` table. All the data in the column will be lost.
  - You are about to drop the column `gravadora` on the `FichaTecnica` table. All the data in the column will be lost.
  - You are about to drop the column `produtor` on the `FichaTecnica` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "FichaTecnica_albumId_key";

-- AlterTable
ALTER TABLE "Album" ADD COLUMN     "autor" TEXT;

-- AlterTable
ALTER TABLE "FichaTecnica" DROP COLUMN "engenheiroSom",
DROP COLUMN "gravadora",
DROP COLUMN "produtor",
ADD COLUMN     "nome" TEXT,
ADD COLUMN     "tipo" TEXT;

-- AlterTable
ALTER TABLE "Musica" ADD COLUMN     "letra" TEXT;
