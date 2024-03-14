import { comfortaa } from "@/app/ui/styles/fonts"
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
            <hr/>
        </header>
    )
}