import { comfortaa } from "@/app/ui/fonts"
import Link from "next/link"
import NavLinks from "./nav-links"

export default function HeaderNav() {
    return(
        <header className="flex flex-row justify-center items-center m-9 space-x-6 p-4 border-b border-black">
            <h1 className={`${comfortaa.className} antialiased select-none text-5xl`}>
                <Link href='/'>
                    Nara Leão
                </Link>
            </h1>
            <NavLinks/>
            {/* <ul className="flex space-x-4">
                <li>Home</li>
                <li>Cronologia</li>
                <li>Galeria</li>
                <li>Discografia</li>
                <li>Documentos</li>
                <li>Pesquisa</li>
                <li>Contatos</li>
            </ul> */}
            <hr/>
        </header>
    )
}