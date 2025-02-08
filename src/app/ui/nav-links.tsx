"use client"

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/app/ui/links"

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
                        <p className="hover:border-b-4">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}