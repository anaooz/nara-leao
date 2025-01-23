import { Metadata } from "next";
import PageTitle from "@/app/ui/pagetitle";
import Link from "next/link";
import { videos } from "./videosAll";
import VideoDisplayer from "@/app/ui/videodisplay";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Vídeos"
}

export default function Videos() {
    const videoArray = Object.entries(videos).map(([key, value]) => ({ key, value }))

    return(
        <>
            <PageTitle name="Vídeos"/>
            <section className="conteudo-pagina">
                <section className="documentos-section">
                    <div className="documentos-text !self-start !w-1/3">
                        <h3>Diversos</h3>
                        <p>Os vídeos listados aqui estão hospedados no Youtube e foram compartilhados por fãs. Conhece algum vídeo interessante da Nara? Entre em <Link href="/contato" className="underline font-semibold">contato</Link> e nos avise!</p>
                    </div>
                    <section className="grid grid-cols-4 justify-center pb-5 ">
                        {videoArray.map((video, index) => (
                            <div key={index}>
                                <VideoDisplayer titulo={video.value[0]} url={video.key}>
                                    <Image src={`http://www.naraleao.com.br/_imgs/galeria/videos/${video.value[1]}.jpg`} width={150} height={200} alt={video.value[0].toString()}/>
                                    <p className="text-sm">{video.value[0]}</p>
                                </VideoDisplayer>
                            </div>
                        ))}
                    </section>
                </section>
            </section>
        </>
    )
}