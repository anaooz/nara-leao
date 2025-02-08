/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Album` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Album_link_key" ON "Album"("link");
