"use client";

import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

interface Musica {
    id: number;
    nome: string;
    compositor: string | null;
    letra: string | null;
}

interface MusicaItemProps {
    musica: Musica;
    index: number;
}

export default function Musica({ musica, index }: Readonly<MusicaItemProps>) {
    const [showLyrics, setShowLyrics] = useState(false);

    const handleToggleLyrics = () => {
        setShowLyrics((prev) => !prev);
    };

    function formatLyrics(lyrics: string): string {
        return lyrics.replace(/\//g, "<br/>")
    }

    return (
        <div className="musicas">
            <div className="flex justify-between">
                <div>
                    <p><span className="font-semibold">{index + 1}.</span> {musica.nome}</p>
                    <small>{musica.compositor}</small>
                </div>
                {musica.letra ? 
                    <button onClick={handleToggleLyrics} className="flex flex-col justify-center">
                        {showLyrics ? <GoChevronDown size={24} /> : <GoChevronRight size={24} />}
                    </button> : <></>
                }
            </div>
            {showLyrics && (
                <div className={`letra-musica ${showLyrics ? "show" : ""}`}>
                    <p dangerouslySetInnerHTML={{ __html: formatLyrics(musica.letra ?? "") }}/>
                </div>
            )}
        </div>
    );
}
