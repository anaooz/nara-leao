import Image from "next/image";
import nara from "@/app/imgs/nara-home.png"

export default function Home() {
  return (
    <main>
      <section className="flex mx-12">
        <article className="text-justify [&>p]:pb-3">
          <p>Esse é um projeto inteiramente educacional utilizando Next.js, o objetivo é revitalizar o site dedicado à cantora Nara Leão, trazendo o site para uma tecnologia mais moderna e fazendo alterações e atualizações em algumas partes do site; esse projeto é inteiramente baseado no <a target="_blank" href="http://www.naraleao.com.br/index.php" className="text-blue-500 hover:underline">site original</a> dedicado à cantora e certas partes do site que não estavam mais funcionando foram recuperadas com a ajuda do <a target="_blank" href="https://web.archive.org/web/20120120021533/http://www.naraleao.com.br/index.php" className="text-blue-500 hover:underline">Wayback Machine</a>.</p>
          <p>Algumas mudanças a se mencionar serão/foram citadas aqui:</p>
          <ul className="list-disc list-inside pb-3">
            <li>Otimização de imagens</li>
          </ul>
          <p>Nara é uma das cantoras mais importantes da música brasileira, cantou o que quis: desde o morro até a música &quot;de elite&quot;, deu luz à grandes cantores que até hoje são conhecidos, como: Chico Buarque, Maria Bethânia e Caetano Veloso; é conhecida como a Musa da Bossa Nova e seu nome está cravado na história da Bossa Nova, MPB e no movimento Tropicália. </p>
          <p>Nara nos deixou em 1989, mas segue viva nos corações dos amantes da música brasileira.</p>
        </article>
        <Image
          src={nara}
          alt="Nara Leão segurando um violão"
          width={500}
        />
      </section>
    </main>
  );
}
