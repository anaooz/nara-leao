import Image from "next/image";
import nara from "@/app/imgs/nara-home.png"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex mx-12">
        <article className="text-justify [&>p]:pb-3">
          <p>Esse é um projeto inteiramente educacional utilizando Next.js, o objetivo é revitalizar o site dedicado à cantora Nara Leão, trazendo o site para uma tecnologia mais moderna e fazendo alterações e atualizações em algumas partes do site; esse projeto é inteiramente baseado no <Link target="_blank" href="http://www.naraleao.com.br/index.php" className="link-externo">site original</Link> dedicado à cantora e certas partes do site que não estavam mais funcionando foram recuperadas com a ajuda do <Link target="_blank" href="https://web.archive.org/web/20120120021533/http://www.naraleao.com.br/index.php" className="link-externo">Wayback Machine</Link>.</p>
          <p>Algumas mudanças a se mencionar serão/foram citadas aqui:</p>
          <ul className="list-disc list-inside pb-3">
            <li>Otimização de imagens</li>
            <li>Adição de favicon baseado na caricatura do cartunista Lan</li>
            <li>Adição de nova fonte em Pesquisa</li>
            <li>Recuperação de vídeos utilizando Wayback Machine</li>
            <li>Atualização da cronologia com o documentário &quot;O Canto Livre de Nara Leão&quot;</li>
            <li>Adição de links para os álbuns nas plataformas digitais</li>
            <li><s>Modo escuro</s></li>
            <li><s>Responsividade em dispositivos móveis</s></li>
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
