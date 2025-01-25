import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function Album({ link, capa, titulo, ano }: 
    { readonly link : string, readonly capa: StaticImageData, readonly titulo: string, readonly ano: number}) {
    return(
        <div>
            <Link href={"discografia/" + link}>
                <Image src={capa} alt={titulo} width={300} className="sombra border border-stone-200"/>
            </Link>
                <h2>{titulo}</h2>
                <p>{ano}</p>
        </div>
    )
}