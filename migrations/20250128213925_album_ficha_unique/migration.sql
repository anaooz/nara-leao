/*
  Warnings:

  - You are about to drop the column `fichaTecnicaId` on the `Album` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[albumId]` on the table `FichaTecnica` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `albumId` to the `FichaTecnica` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_fichaTecnicaId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "fichaTecnicaId";

-- AlterTable
ALTER TABLE "FichaTecnica" ADD COLUMN     "albumId" INTEGER NOT NULL,
ADD COLUMN     "engenheiroSom" TEXT,
ADD COLUMN     "gravadora" TEXT,
ADD COLUMN     "produtor" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "FichaTecnica_albumId_key" ON "FichaTecnica"("albumId");

-- AddForeignKey
ALTER TABLE "FichaTecnica" ADD CONSTRAINT "FichaTecnica_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
