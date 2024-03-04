"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/"},
    { name: "Cronologia", href: "/cronologia"},
    { name: "Galeria", href: "/galeria"},
    { name: "Discografia", href: "/discografia"},
    { name: "Documentos", href: "/documentos"},
    { name: "Pesquisa", href: "/pesquisa"},
    { name: "Contatos", href: "/contatos"}
]

export default function NavLinks() {
    const pathname = usePathname()

    return(
        <>
            {links.map((link) => {
                return (
                    <Link 
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex space-x-4",
                            {
                                "border-b-4": pathname === link.href,
                            }
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}