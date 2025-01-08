import Carousel from "@/app/ui/carousel"
import PageTitle from "@/app/ui/pagetitle"
import Image from "next/image"
import { fotos40, fotos50 } from "@/app/(overview)/galeria/fotos/fotosAll"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Fotos"
}

export default function Fotos() {
    const anos40 = Object.entries(fotos40).map(([key, value]) => ({ key, value }))
    const anos50 = Object.entries(fotos50).map(([key, value]) => ({ key, value }))
    
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
            </div>
        </>
    )
}
