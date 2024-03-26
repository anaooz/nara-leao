import PageTitle from "@/app/ui/pagetitle"
import { Metadata } from "next"
import Image from "next/image"
import Carousel from "../../ui/carousel";
import { slide } from "@/app/(overview)/documentos/fotos"

export const metadata: Metadata = {
    title: "Documentos"
}

export default function Documentos() {

    return(
        <>
            <PageTitle name="Documentos"/>
            <div className="conteudo-pagina">
                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3>Anos 40</h3>
                        <p>Nasce em Vitória, capital do Espírito Santo, Nara Lofego Leão.</p>
                    </div>
                    <Carousel slide={slide}>
                            <Image
                                src={"http://www.naraleao.com.br/_imgs/documentos/1948.jpg"}
                                width={50}
                                height={50}
                                alt="Caderno de colégio de Nara Leão, 1948"
                                className="documentos-imgs"
                            />
                    </Carousel>
                </section>

                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3 className="text-xl">Anos 50</h3>
                        <p className="text-xs">Ocorrem no apartamento de Nara as primeiras famosas reuniões do grupo de jovens músicos que participariam da Bossa Nova.</p>
                    </div>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1957.jpg"}
                            width={110}
                            height={50}
                            alt="Boletim escolar de Nara Leão, primeiro ano científico, 1957"
                            className="documentos-imgs"
                        />
                    </Carousel>
                </section>

                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3 className="text-xl">Anos 60</h3>
                        <p className="text-xs">Nara faz seus primeiros shows fora do Rio de Janeiro e inicia o namoro com o cineasta Cacá Diegues.</p>
                    </div>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/nl_1964p.jpg"}
                            width={110}
                            height={50}
                            alt="Programa original do espetáculo Opinião, 1964"
                            className="documentos-imgs"
                        />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1969.jpg"}
                            width={60}
                            height={50}
                            alt="Texto datilografado de Nara Leão, Paris, 1969"
                            className="documentos-imgs"
                        />
                    </Carousel>
                </section>

                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3 className="text-xl">Anos 70</h3>
                        <p className="text-xs">Vida em Paris, primeira gravidez e reencontro com a Bossa Nova.</p>
                    </div>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1974.jpg"}
                            width={60}
                            height={50}
                            alt="Trabalho da faculdade de Psicologia, 1974"
                            className="documentos-imgs"
                            />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1975.jpg"}
                            width={80}
                            height={50}
                            alt="Segunda via do boletim escolar, Colégio Mello e Souza, 1975"
                            className="documentos-imgs"
                            />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1978_1.jpg"}
                            width={60}
                            height={50}
                            alt="Primeira visita ao Hospital do Rio (frente), 1978"
                            className="documentos-imgs"
                            />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/1978_2.jpg"}
                            width={60}
                            height={50}
                            alt="Primeira visita ao Hospital do Rio (verso), 1978"
                            className="documentos-imgs"
                            />
                    </Carousel>
                </section>

                <section className="documentos-section">
                    <div className="documentos-text">
                        <h3 className="text-xl">Sem data</h3>
                    </div>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/sd_1.jpg"}
                            width={60}
                            height={50}
                            alt="Texto datilografado de Nara Leão, s/d"
                            className="documentos-imgs"
                            />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/sd_2.jpg"}
                            width={60}
                            height={50}
                            alt="Texto datilografado de Nara Leão, s/d"
                            className="documentos-imgs"
                            />
                    </Carousel>
                    <Carousel slide={slide}>
                        <Image
                            src={"http://www.naraleao.com.br/_imgs/documentos/sd_3.jpg"}
                            width={60}
                            height={50}
                            alt="Texto datilografado de Nara Leão, s/d"
                            className="documentos-imgs"
                            />
                    </Carousel>
                </section>
            </div>
        </>
    )
}