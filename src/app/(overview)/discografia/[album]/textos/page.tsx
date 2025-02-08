import AlbumInfo from "@/app/ui/album-info";
import { albums } from "../../albuns";
import { PrismaClient } from "@prisma/client";

export default async function Textos({params} : {readonly params: Promise<{album: string}>}) {

    const album = (await params).album

    console.log(album)

    const prisma = new PrismaClient()

    const record = albums.find(record => record.link === album)
    
        const links = await prisma.plataforma.findMany({
            where: {
                Album: {
                    link: album
                }
            }
        })
    
        const textos = await prisma.album.findMany({
            where: {
                link: album
            }
        })

    return(
        <section className="conteudo-pagina flex">
            <AlbumInfo record={record} textos={textos} album={album} links={links}/>
            <section className="textos pl-2">
                <h2 className="titulo-infos">Texto</h2>
                {textos.map((texto) => (
                    <section key={texto.id} className="px-3">
                        <p className="text-justify">{texto.textos}</p>
                        <p className="mt-4 italic">{texto.autor}</p>
                    </section>
                ))}
            </section>
        </section>
    )
}