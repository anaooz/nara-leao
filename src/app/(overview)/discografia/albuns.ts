import nara1964 from "@/app/imgs/albuns/nara1964.jpg"
import opiniao from "@/app/imgs/albuns/opiniaodenara.jpg"
import cantolivre from "@/app/imgs/albuns/cantolivre.jpg"
import cinconabossa from "@/app/imgs/albuns/5nabossa.jpg"
import pedepassagem from "@/app/imgs/albuns/pedepassagem.jpg"
import manhadeliberdade from "@/app/imgs/albuns/manhadeliberdade.jpg"
import ventodemaio from "@/app/imgs/albuns/ventodemaio.jpg"
import nara1967 from "@/app/imgs/albuns/nara1967.jpg"
import nara1968 from "@/app/imgs/albuns/nara1968.jpg"
import coisasdomundo from "@/app/imgs/albuns/coisasdomundo.jpg"
import dezanosdepois from "@/app/imgs/albuns/dezanosdepois.jpg"
import meuprimeiroamor from "@/app/imgs/albuns/meuprimeiroamor.jpg"
import osmeusamigossaoumbarato from "@/app/imgs/albuns/osmeusamigossaoumbarato.jpg"
import equetudovaproinferno from "@/app/imgs/albuns/equetudovaproinferno.jpg"
import naracantaencastellano from "@/app/imgs/albuns/naracantaencastellano.jpg"
import comacucarcomafeto from "@/app/imgs/albuns/comacucarcomafeto.jpg"
import romancepopular from "@/app/imgs/albuns/romancepopular.jpg"
import nasciparabailar from "@/app/imgs/albuns/nasciparabailar.jpg"
import meusambaencabulado from "@/app/imgs/albuns/meusambaencabulado.jpg"
import abracosebeijinhos from "@/app/imgs/albuns/abracosebeijinhos.jpg"
import garotadeipanema from "@/app/imgs/albuns/garotadeipanema.png"
import umcantinhoumviolao from "@/app/imgs/albuns/umcantinhoumviolao.jpg"
import meussonhosdourados from "@/app/imgs/albuns/meussonhosdourados.jpg"
import myfoolishheart from "@/app/imgs/albuns/myfoolishheart.jpg"
import { StaticImageData } from "next/image"

interface Album {
    link: string;
    capa: StaticImageData;
    titulo: string;
    ano: number;
}

export const albums: Album[] = [
    { link: "nara-1964", capa: nara1964, titulo: "Nara", ano: 1964 },
    { link: "opiniao-de-nara", capa: opiniao, titulo: "Opinião de Nara", ano: 1964 },
    { link: "o-canto-livre-de-nara-leao", capa: cantolivre, titulo: "O Canto Livre de Nara Leão", ano: 1965 },
    { link: "cinco-na-bossa", capa: cinconabossa, titulo: "5 Na Bossa", ano: 1965 },
    { link: "nara-pede-passagem", capa: pedepassagem, titulo: "Nara Pede Passagem", ano: 1966 },
    { link: "manha-de-liberdade", capa: manhadeliberdade, titulo: "Manhã de Liberdade", ano: 1966 },
    { link: "vento-de-maio", capa: ventodemaio, titulo: "Vento de Maio", ano: 1967 },
    { link: "nara-1967", capa: nara1967, titulo: "Nara", ano: 1967 },
    { link: "nara-1968", capa: nara1968, titulo: "Nara", ano: 1968 },
    { link: "coisas-do-mundo", capa: coisasdomundo, titulo: "Coisas do Mundo", ano: 1969 },
    { link: "dez-anos-depois", capa: dezanosdepois, titulo: "Dez Anos Depois", ano: 1971 },
    { link: "meu-primeiro-amor", capa: meuprimeiroamor, titulo: "Meu Primeiro Amor", ano: 1975 },
    { link: "os-meus-amigos-sao-um-barato", capa: osmeusamigossaoumbarato, titulo: "Os Meus Amigos São Um Barato", ano: 1977 },
    { link: "e-que-tudo-mais-va-pro-inferno", capa: equetudovaproinferno, titulo: "E Que Tudo Mais Vá Pro Inferno", ano: 1978 },
    { link: "nara-canta-en-castellano", capa: naracantaencastellano, titulo: "Nara Canta En Castellano", ano: 1979 },
    { link: "com-acucar-com-afeto", capa: comacucarcomafeto, titulo: "Com Açúcar, Com Afeto", ano: 1980 },
    { link: "romance-popular", capa: romancepopular, titulo: "Romance Popular", ano: 1981 },
    { link: "nasci-para-bailar", capa: nasciparabailar, titulo: "Nasci Para Bailar", ano: 1982 },
    { link: "meu-samba-encabulado", capa: meusambaencabulado, titulo: "Meu Samba Encabulado", ano: 1983 },
    { link: "abracos-e-beijinhos", capa: abracosebeijinhos, titulo: "Abraços e Beijinhos e Carinhos Sem Ter Fim...", ano: 1984 },
    { link: "garota-de-ipanema", capa: garotadeipanema, titulo: "Garota de Ipanema", ano: 1985 },
    { link: "um-cantinho-um-violao", capa: umcantinhoumviolao, titulo: "Um Cantinho, Um Violão", ano: 1985 },
    { link: "meus-sonhos-dourados", capa: meussonhosdourados, titulo: "Meus Sonhos Dourados", ano: 1987 },
    { link: "my-foolish-heart", capa: myfoolishheart, titulo: "My Foolish Heart", ano: 1989 }
];
