import PageTitle from "@/app/ui/pagetitle"
import Image from "next/image"
import { fotos } from "@/app/(overview)/galeria/fotos"
import { videos } from "@/app/(overview)/galeria/videos"
import Carousel from "@/app/ui/carousel"
import { Link } from "@heroui/react"
import { GoArrowRight } from "react-icons/go"
import VideoDisplayer from "@/app/ui/videodisplay"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Galeria"
}

export default async function Galeria() {
    const fotoArray = Object.entries(fotos).map(([key, value]) => ({ key, value }))
    const videoArray = Object.entries(videos).map(([key, value]) => ({ key, value }))

    return(
        <>
            <PageTitle name="Galeria"/>
            <div className="conteudo-pagina">
                <section className="flex">
                    <div className="w-1/2 mr-4 ">
                        <h2 className="titulo-galeria">Fotos</h2>
                            <Carousel slide={fotos}>
                            <section className="grid grid-cols-5 gap-x-px gap-y-1 items-center border-black border-b border-dotted pb-5">
                                    {fotoArray.map((image, index) => {
                                        return(
                                            <div key={index} className="flex justify-center">
                                                <Image
                                                    src={image.value[0]}
                                                    width={image.value[1]}
                                                    height={image.value[1]}
                                                    alt={image.key}
                                                    className="border border-black"
                                                />
                                            </div>
                                        )
                                    })}
                                </section>
                            </Carousel>
                            <Link href="galeria/fotos" className="text-black left-[72%] hover:underline"><GoArrowRight/><p>todas as fotos</p></Link>
                    </div>
                    <div className="w-1/2">
                        <h2 className="titulo-galeria">Vídeos</h2>
                        <section className="grid grid-cols-3 grid-rows-2 justify-center border-black border-b border-dotted pb-5">
                            {videoArray.map((video, index) => (
                                    <div key={index}>
                                        <VideoDisplayer titulo={video.value[0]} url={video.key}>
                                            <Image src={`http://www.naraleao.com.br/_imgs/galeria/videos/${video.value[1]}.jpg`} width={150} height={200} alt={video.value[0].toString()}/>
                                            <p className="text-sm">{video.value[0]}</p>
                                        </VideoDisplayer>
                                    </div>
                            ))}
                        </section>
                        <Link href="galeria/videos" className="text-black left-[70%] hover:underline"><GoArrowRight/><p>todos os vídeos</p></Link>
                    </div>
                </section>
            </div>

        </>
    )
}