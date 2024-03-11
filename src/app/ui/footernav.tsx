import { links } from "@/app/ui/links"
import Link from "next/link"
import { FaGithub } from "react-icons/fa6";

export default function FooterNav() {
    return(
        <footer className="flex justify-between border-t m-9 text-xs">
            <div className="flex">
                {
                    links.map((link) => {
                        return(
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-1 hover:text-blue-500"
                            >
                                <p>/{link.name}</p>
                            </Link>
                        )
                    })
                }
            </div>
            <p className="flex"><a target="_blank" href="https://github.com/anaooz" className="flex mr-1"><FaGithub className="self-center mr-1"/>mateus</a>{" "}- projeto educacional</p>
        </footer>
    )
}