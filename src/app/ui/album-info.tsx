"use client"

import "@/app/ui/styles/album.css"
import Image from "next/image";
import Link from "next/link";
import spotify from "@/app/imgs/plataformas/spotify-icon.svg"
import deezer from "@/app/imgs/plataformas/deezer-icon.svg"
import applemusic from "@/app/imgs/plataformas/apple-icon.svg"
import youtube from "@/app/imgs/plataformas/youtube-icon.svg"
import amazon from "@/app/imgs/plataformas/amazon-icon.svg"
import tidal from "@/app/imgs/plataformas/tidal-icon.svg"
import { usePathname } from "next/navigation";
import { IoMdArrowRoundForward } from "react-icons/io"

const platformIcons = {
    spotify: spotify,
    deezer: deezer,
    appleMusic: applemusic,
    ytMusic: youtube,
    amazon: amazon,
    tidal: tidal,
};

const platformLabels = {
    spotify: "Spotify",
    deezer: "Deezer",
    appleMusic: "Apple Music",
    ytMusic: "YouTube Music",
    amazon: "Amazon Music",
    tidal: "Tidal",
};

export default function AlbumInfo({ record, textos, album, links }: 
    { readonly record: any, readonly textos: any[], readonly album: string, readonly links: any[] }) {
    
        const pathname = usePathname()

        console.log(pathname)
        return (
        <section className="album-infos">
            <h2 className="titulo-infos">Álbum</h2>
            <div>
                <Image src={record?.capa} alt="capa" width={300}/>
                <h2 className="text-xl font-medium">{record?.titulo}</h2>
                <p className="mb-4">{record?.ano}</p>
            </div>
            {textos.map((texto) => (
            texto.textos ? 
                <div key={texto.id} className="link-textos">
                    <Link href={`/discografia/${album}`}>
                        {pathname === `/discografia/${album}` ? <IoMdArrowRoundForward/> : <></>}Informações Gerais
                    </Link>
                    <Link href={`/discografia/${album}/textos`}>
                    {pathname === `/discografia/${album}/textos` ? <IoMdArrowRoundForward/> : <></>}Textos do Álbum</Link>
                </div>
            : null
            ))}
            <h3 className="titulo-infos !text-base">Links</h3>
                {links.map((link) => (
                    <div key={link.id} className="links">
                        {Object.entries(platformIcons).map(([platformKey, icon]) => {
                            const platformLink = link[platformKey as keyof typeof link];
                            if (platformLink) {
                                return (
                                    <Link key={platformKey} href={platformLink.toString()} target="_blank" className="plataformas">
                                        <Image src={icon} alt={platformLabels[platformKey as keyof typeof platformLabels]} width={64} />
                                        <small className="hover:underline">{platformLabels[platformKey as keyof typeof platformLabels]}</small>
                                    </Link>
                                );
                            }
                            return null
                            })}
                        </div>
                        ))}
        </section>
    );
}