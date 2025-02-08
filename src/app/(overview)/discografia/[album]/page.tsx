import "@/app/ui/styles/album.css";
import { albums } from "../albuns";
import { PrismaClient } from "@prisma/client";
import AlbumInfo from "@/app/ui/album-info";
import Musica from "@/app/ui/musicas";

export default async function AlbumPage({
    params,
}: {
    readonly params: Promise<{ album: string}>
}) {

    const album = (await params).album

    const record = albums.find(record => record.link === album)
    
    if (!record) {
        return <h1>Álbum não encontrado</h1>;
    }

    const prisma = new PrismaClient()

    const links = await prisma.plataforma.findMany({
        where: {
            Album: {
                link: album
            }
        }
    })

    const musicas = await prisma.musica.findMany({
        where: {
            album: {
                link: album
            }
        },
        orderBy: {
            id: "asc"
        }
    })

    const ficha = await prisma.fichaTecnica.findMany({
        where: {
            album: {
                link: album
            }
        }
    })

    const textos = await prisma.album.findMany({
        where: {
            link: album
        }
    })

    console.log(musicas)

    return(
        <section className="conteudo-pagina flex">
            <AlbumInfo record={record} textos={textos} album={album} links={links}/>
            <section className="album-musicas">
            <h2 className="titulo-infos">Músicas</h2>
            {musicas.map((musica, index) => (
                <Musica key={musica.id} musica={musica} index={index} />
            ))}
        </section>
            <section className="album-ficha">
                <h2 className="titulo-infos">Ficha Técnica</h2>
                {ficha.map((info) => (
                    <div key={info.id} className="ficha">
                        <p className="font-bold">{info.tipo}:</p>
                        <p>{info.nome}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}