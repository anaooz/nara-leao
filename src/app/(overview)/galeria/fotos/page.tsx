import Carousel from "@/app/ui/carousel"
import PageTitle from "@/app/ui/pagetitle"
import Image from "next/image"
import { fotos40, fotos50, fotos60, fotos70, fotos80 } from "@/app/(overview)/galeria/fotos/fotosAll"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Fotos"
}

export default function Fotos() {
    const anos40 = Object.entries(fotos40).map(([key, value]) => ({ key, value }))
    const anos50 = Object.entries(fotos50).map(([key, value]) => ({ key, value }))
    const anos60 = Object.entries(fotos60).map(([key, value]) => ({ key, value }))
    const anos70 = Object.entries(fotos70).map(([key, value]) => ({ key, value }))
    const anos80 = Object.entries(fotos80).map(([key, value]) => ({ key, value }))
    
    return(
        <>
            <PageTitle name="Fotos"/>
            <div className="conteudo-pagina">
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 40</h3>
                        <p>Nasce em Vitória, capital do Espírito Santo, Nara Lofego Leão.</p>
                    </div>
                    <Carousel slide={fotos40}>
                        <section className="grid grid-cols-4 items-center">
                            {anos40.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <Image
                                            src={image.value[0]}
                                            width={image.value[1]}
                                            height={image.value[1]}
                                            alt={image.key}
                                            className="documentos-imgs"
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Carousel>
                </section>
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 50</h3>
                        <p>Ocorrem no apartamento de Nara as primeiras famosas reuniões do grupo de jovens músicos que participariam da Bossa Nova.</p>
                    </div>
                    <Carousel slide={fotos50}>
                        <section className="grid grid-cols-8 items-center">
                            {anos50.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <Image
                                            src={image.value[0]}
                                            width={image.value[1]}
                                            height={image.value[1]}
                                            alt={image.key}
                                            className="documentos-imgs"
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Carousel>
                </section>
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 60</h3>
                        <p>Nara faz seus primeiros shows fora do Rio de Janeiro e inicia o namoro com o cineasta Cacá Diegues.</p>
                    </div>
                    <Carousel slide={fotos60}>
                    <section className="grid grid-cols-8 items-center">
                            {anos60.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <Image
                                            src={image.value[0]}
                                            width={image.value[1]}
                                            height={image.value[1]}
                                            alt={image.key}
                                            className="documentos-imgs"
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Carousel>
                </section>
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 70</h3>
                        <p>Vida em Paris, primeira gravidez e reencontro com a Bossa Nova.</p>
                    </div>
                    <Carousel slide={fotos70}>
                        <section className="grid grid-cols-8 items-center">
                            {anos70.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <Image
                                            src={image.value[0]}
                                            width={image.value[1]}
                                            height={image.value[1]}
                                            alt={image.key}
                                            className="documentos-imgs"
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Carousel>
                </section>
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 80</h3>
                        <p>Anos de intensa atividade, lançando discos, dando shows e participando de especiais de televisão.</p>
                    </div>
                    <Carousel slide={fotos80}>
                        <section className="grid grid-cols-8 items-center">
                            {anos80.map((image, index) => {
                                return(
                                    <div key={index}>
                                        <Image
                                            src={image.value[0]}
                                            width={image.value[1]}
                                            height={image.value[1]}
                                            alt={image.key}
                                            className="documentos-imgs"
                                        />
                                    </div>
                                )
                            })}
                        </section>
                    </Carousel>
                </section>
            </div>
        </>
    )
}
