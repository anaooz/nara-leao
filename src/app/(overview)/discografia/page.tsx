import PageTitle from "@/app/ui/pagetitle"
import { Metadata } from "next"
import { albums } from "@/app/(overview)/discografia/albuns"
import Album from "@/app/ui/albums"

export const metadata: Metadata = {
    title: "Discografia",
}

export default function Albums() {
    return (
        <>
            <PageTitle name="Álbuns" />
            <div className="conteudo-pagina">
                <section className="grid grid-cols-5 gap-4">
                    {albums.map((album) => (
                        <Album
                            key={album.link}
                            link={album.link}
                            capa={album.capa}
                            titulo={album.titulo}
                            ano={album.ano}
                        />
                    ))}
                </section>
            </div>
        </>
    )
}
