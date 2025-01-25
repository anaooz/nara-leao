import Image from "next/image";
import { albums } from "../albuns";
import Album from "@/app/ui/albums";

export default async function AlbumPage({
    params,
}: {
    readonly params: Promise<{ album: string}>
}) {

    const album = (await params).album

    const record = albums.find(record => record.link === album)
    const titulo = record?.titulo

    return(
        <>
            <h1 className="black">{titulo}</h1>
            <Image src={record?.capa} alt="capa" width={300}/>
        </>
    )
}