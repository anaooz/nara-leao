import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    await prisma.album.update({
        where: { 
            link: "nara-1964" 
        },
        data: {
            autor: "Aloysio de Oliveira"
        }
    })

    console.log("✅ Informação inserida com sucesso!");
}

// "nara-1964"
// "opiniao-de-nara"
// "o-canto-livre-de-nara-leao"
// "cinco-na-bossa"
// "nara-pede-passagem"
// "manha-de-liberdade"
// "vento-de-maio"
// "nara-1967"
// "nara-1968"
// "coisas-do-mundo"
// "dez-anos-depois"
// "meu-primeiro-amor"
// "os-meus-amigos-sao-um-barato"
// "e-que-tudo-mais-va-pro-inferno"
// "nara-canta-en-castellano"
// "com-acucar-com-afeto"
// "romance-popular"
// "nasci-para-bailar"
// "meu-samba-encabulado"
// "abracos-e-beijinhos"
// "garota-de-ipanema"
// "um-cantinho-um-violao"
// "meus-sonhos-dourados"
// "my-foolish-heart"


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })