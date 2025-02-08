-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "link" TEXT,
    "textos" TEXT,
    "fichaTecnicaId" INTEGER,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Musica" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "participacao" TEXT,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Musica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FichaTecnica" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "FichaTecnica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plataforma" (
    "id" SERIAL NOT NULL,
    "spotify" TEXT NOT NULL,
    "deezer" TEXT NOT NULL,
    "appleMusic" TEXT NOT NULL,
    "albumId" INTEGER,
    "musicaId" INTEGER,

    CONSTRAINT "Plataforma_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_fichaTecnicaId_fkey" FOREIGN KEY ("fichaTecnicaId") REFERENCES "FichaTecnica"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Musica" ADD CONSTRAINT "Musica_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plataforma" ADD CONSTRAINT "Plataforma_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plataforma" ADD CONSTRAINT "Plataforma_musicaId_fkey" FOREIGN KEY ("musicaId") REFERENCES "Musica"("id") ON DELETE SET NULL ON UPDATE CASCADE;
