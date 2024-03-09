import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import poster from "@/app/imgs/cantolivredenaraleao.jpg"

export const metadata: Metadata = {
    title: "Cronologia"
}

export default function Page() {

    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-2xl p-3 border-b border-black w-1/2">Cronologia</h1>
            </div>
            <article className="flex flex-col mx-[25%] mt-5">
                <h2>19 de janeiro de 1942</h2>
                <p>Nasce em Vitória, capital do Espírito Santo, Nara Lofego Leão. Nara era a segunda filha do casamento entre Dr. Jairo Leão, advogado, e Altina Lofego Leão, professora. Sua irmã mais velha era Danuza Lofego Leão.</p>
                
                <h2>1954</h2>
                <p>Nara ganha do pai o seu primeiro violão e passa a fazer aulas com o músico Patrício Teixeira. Nessa época, ela estudava no mesmo colégio de Roberto Menescal e, já com doze anos, o apresentava em discos as novidades do jazz norte-americano.</p>
            
                <h2>1956</h2>
                <p>Nara se matricula na Academia de Violão de Menescal e Carlos Lyra, na Rua Sá Ferreira.</p>

                <div className="absolute right-[5%] top-[35%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl_756.jpg"
                            width={300}
                            height={300}
                            alt="Nara Leão entre amigos, 1956"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara Leão entre amigos, 1956</p>
                </div>

                <h2>1957</h2>
                <p>Durante esse ano ocorrem no apartamento de Nara as primeiras das famosas reuniões do grupo de jovens músicos que participariam da Bossa Nova. O apartamento era localizado no edifício Champ-Elysées, em frente ao posto 4 da Avenida Atlântica, Copacabana.</p>

                <h2>1958</h2>
                <p>
                    Após contrair uma hepatite, Nara se ausenta do colégio por dois meses. Logo depois desse evento, larga em definitivo os estudos, no segundo científico.
                    <br/>  
                    <br/>  
                    Durante breve período, trabalha como secretária de redação e repórter do “Tablóide UH”, caderno de utilidades comandado por Alberto Dines no jornal Última Hora, de Samuel Wainer.
                </p>

                <h2>1959</h2>
                <p>
                    No dia 22 de setembro, Nara participa apenas como platéia no I Festival de Samba Session realizado na PUC-RJ. Esse seria um dos primeiros shows com o grupo de músicos envolvidos com a nascente Bossa Nova.
                    <br/>
                    <br/>
                    No dia 13 de novembro, estréia como cantora no show “Segundo comando da operação bossa nova”, realizado na Escola Naval. Nara cantou “Se é tarde me perdoa” e “Fim de noite”.
                    <br/>
                    <br/>
                    Inicia seu namoro com Ronaldo Bôscoli.
                </p>
            
                <h2>1960</h2>
                <p>
                    Nara passa a frequentar o consultório do psicanalista Ivan Ribeiro, um dos membros fundadores da primeira turma do Instituto de Medicina Psicológica ao lado de Hélio Pellegrino.
                    <br/>
                    <br/>
                    Nesse ano, começam a sair as primeiras notícias na imprensa carioca sobre a Bossa Nova e o grupo de jovens reunidos nos apartamentos da Zona Sul, entre eles o de Nara. Ela participa de uma série de apresentações, públicas e privadas, e é destaque com fotos em várias matérias jornalísticas.
                    <br/>
                    <br/>
                    Em junho a revista Singra, encarte do jornal Correio da Manhã, publica uma reportagem feita durante uma reunião de músicos na casa de Nara Leão.
                </p>
                
                <div className="absolute left-[0.8%] top-[140%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl853.jpg"
                            width={400}
                            height={300}
                            alt="Samuel Wainer, Nara Leão, e Cacá Diegues, anos 60"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Samuel Wainer, Nara Leão, e Cacá Diegues, anos 60</p>
                </div>
            
                <h2>1961</h2>
                <p>
                    Paralelamente a iniciante carreira de cantora, Nara se dedica às artes plásticas, mais especificamente à xilogravura. Com 500 candidatos concorrendo para o X Salão Nacional de Arte Moderna, Nara e suas obras foram classificadas dentre 138 trabalhos.
                    <br/>
                    <br/>
                    Termina seu relacionamento com Ronaldo Bôscoli.
                </p>
            
                <h2>1962</h2>
                <p>
                    Nara continua participando esparsamente de shows ao redor do país, cantando basicamente um repertório ligado a Bossa Nova, sempre acompanhada dos músicos do movimento.
                    <br/>
                    <br/>
                    Inicia seu namoro com o cineasta e compositor moçambicano Ruy Guerra.
                </p>

                <h2>1963</h2>
                <p>
                    Em março, na boate Au bom gourmet em Copacabana, Nara se apresenta pela primeira vez como cantora profissional, dividindo o palco com Carlos Lyra e Vinícius de Moraes no espetáculo Pobre Menina Rica, escrito pelos dois.
                    <br/>
                    <br/>
                    Primeiras apresentações em programas de TV de diferentes estados.
                    <br/>
                    <br/>
                    Em agosto, no estúdio Rio-Som da Rua do Senado, Rio de Janeiro, inicia a gravação do seu primeiro disco de carreira. A gravadora era a recém-fundada Elenco, de Aloysio de Oliveira.
                </p>

                <h2>1964</h2>
                <p>
                    Ano de ascensão pública de Nara como uma das maiores cantoras do país. Suas opiniões políticas e declarações a favor dos movimentos de esquerda geravam polêmicas nos jornais.
                    <br/>
                    <br/>
                    Em janeiro de 1964 Nara cumpre uma temporada de shows da boite Bottle’s, no Beco das Garrafas, ao lado do Bossa Trio (DomUm Romão na bateria, Gusmão no baixo e Carlinhos no piano) e da violonista Rosinha de Valença.
                    <br/>
                    <br/>
                    Nara, seu primeiro disco pela Elenco, é lançado na boate Zum Zum em fevereiro desse ano. Nesse disco, Nara se afasta de vez do rótulo de “cantora de bossa nova” e inaugura um repertório que promovia o encontro das composições de Carlos Lyra, Vinicius de Moraes e Baden Powell com os sambas de Cartola, Zé Ketti e Nelson Cavaquinho.
                    <br/>
                    <br/>
                    Ainda nesse ano de 1964, Nara assinava um contrato com a Philips para a gravação de seu novo disco. Além disso, fez uma temporada em São Paulo e shows em várias cidades brasileiras, passando pelo Norte e pelo Nordeste. Em uma dessas viagens, conhece os trabalhos de Maria Bethânia, Caetano Veloso e Gilberto Gil.
                    <br/>
                    <br/>
                    Em setembro, Nara participa ao lado de Sérgio Mendes, Tião Neto e Edson Machado de uma turnê de shows nacionais e internacionais (com apresentações no Japão) promovida pela empresa de moda Rhodia.
                    <br/>
                    <br/>
                    Em outubro, Nara concede uma polêmica declaração para a revista Fatos e Fotos em que anuncia sua ruptura completa e, até então, definitiva, com a Bossa Nova e seus compositores. Com o título “Nara de uma bossa só”, a matéria teria uma réplica dos seus antigos parceiros, na mesma revista, com o título “Resposta à Nara”.
                    <br/>
                    <br/>
                    Em Novembro é lançado Opinião de Nara, segundo disco da cantora, pela Philips. O disco, com repertório na mesma linha do primeiro, torna-se a inspiração para o espetáculo musical Opinião, escrito por Oduvaldo Vianna Filho, Paulo Pontes e Armanda Costa, dirigido por Augusto Boal e encenado pela própria Nara, por Zé Ketti e João do Vale.
                </p>

                <h2>1965</h2>
                <p>
                    Nara inicia o ano como uma das principais personalidades do país devido ao sucesso de seus discos e do espetáculo Opinião. A crítica musical debate não só suas canções como suas declarações públicas em entrevistas.
                    <br/>
                    <br/>
                    No final de janeiro, por problemas na garganta devido ao uso intenso de sua voz, Nara precisa se retirar do espetáculo Opinião e, em um primeiro momento, é substituída por Susana Moraes. Logo depois a própria Nara indica como sua substitua a jovem cantora baiana Maria Bethânia.
                    <br/>
                    <br/>
                    Em março inicia as gravações de seu LP O Canto livre de Nara, pela Philips.
                    <br/>
                    <br/>
                    Em abril Nara participa do espetáculo Liberdade, Liberdade, segunda incursão do grupo Opinião no teatro de Arena do Rio de Janeiro. O espetáculo – escrito por Millôr Fernandes e dirigido por Flávio Rangel – foi alvo de uma série de ataques dos ditos anti-comunistas durante suas apresentações.
                    <br/>
                    <br/>
                    No mesmo período de Liberdade, Liberdade, Nara participa de um show na boate Zum Zum ao lado de Edu Lobo e Luis Eça.
                    <br/>
                    <br/>
                    Em agosto Nara inicia a gravação e seu novo disco pela Philips, que seria lançado no ano seguinte.
                    <br/>
                    <br/>
                    Em setembro é lançado pela Philips o disco do espetáculo Opinião, gravado em janeiro, com Nara Leão ainda no elenco.
                    <br/>
                    <br/>
                    A Philips lança o LP 5 na bossa – Nara, Edu Lobo, Tamba Trio, resultado de um show realizado no Teatro Paramount durante esse ano.
                </p>

                <h2>1966</h2>
                <p>
                    Em janeiro Nara sai em viagem de férias para Nova York e para a Europa.
                    <br/>
                    <br/>
                    Em fevereiro é lançado o disco Nara Pede Passagem, seu terceiro pela Philips. O Disco traz novos compositores em seu repertório, como os iniciantes Sidnei Miller, Jards Macalé, Paulinho da Viola e Chico Buarque de Hollanda.
                    <br/>
                    <br/>
                    Em maio, Nara concede uma famosa entrevista para o Diário de Notícias, declarando sua oposição ferrenha aos militares no governo do país. A manchete “Nara é de opinião: esse exército não vale nada”, causou imensa repercussão e ameaças de prisão por parte do regime ditatorial e palavras solidárias de cronistas como Rubem Braga, Carlinhos de Oliveira e Carlos Drummond de Andrade.
                    <br/>
                    <br/>
                    No mesmo mês de maio Nara dá seu depoimento para o debate “Que caminho seguir na música popular brasileira?”, organizado pela Revista Civilização Brasileira, organizado por Airton Lima Barbosa. Uma de suas declarações da época: “Enquanto Roberto Carlos vai a todos os programas, todos os dias, o pessoal da música brasileira, talvez por comodismo, não vai. Existe até certo preconceito – quando eu vou ao programa do Chacrinha os bossanovistas me picham, eles acham que é ‘decadência’ ir a este programa”.
                    <br/>
                    <br/>
                    No Festival de Música Popular da Rede Record Nara defende duas músicas: O homem, de Millôr Fernandes e A Banda, de Chico Buarque. A segunda, interpretada ao lado do compositor, tornou-se a vencedora do Festival ao lado de Disparada, de Geraldo Vandré. Seu compacto, prensado pela Philips, tornou-se um sucesso nacional de proporções gigantescas.
                    <br/>
                    <br/>
                    Nara grava seu quarto disco pela Philips, intitulado Manhã de Liberdade e trazendo “A banda” como faixa de abertura. Outro disco lançado esse ano com participação de Nara é o disco ao vivo com a peça Liberdade, Liberdade.
                    <br/>
                    <br/>
                    Ainda nesse ano Nara participa por pouco mais de seis meses como apresentadora ao lado de Chico Buarque no programa Pra ver a banda passar, transmitido pela Rede Record de Televisão.
                    <br/>
                    <br/>
                    Ano em que inicia o namoro com o cineasta Cacá Diegues.
                </p>

                <div className="absolute right-[0.8%] top-[340%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl796.jpg"
                            width={400}
                            height={200}
                            alt="Nara Leão na noite de apresentação de “A Banda”"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara Leão na noite de apresentação de “A Banda”<br/>Festival de Record, 1966</p>
                </div>

                <h2>1967</h2>
                <p>
                    Em maio Nara e Chico Buarque apresentam o último programa Pra ver a banda passar na Rede Record.
                    <br/>
                    <br/>
                    No mesmo mês, Nara grava e lança com uma festa no Largo do Boticário o disco Vento de maio, com repertório dominado pelas composições de Chico Buarque e Sidnei Miller. Como destaque, a bela capa do pintor Augusto Rodrigues, seu antigo professor de pintura.
                    <br/>
                    <br/>
                    Em julho, ao lado de Caetano Veloso, da varanda de um hotel em São Paulo, Nara assiste e critica a chamada “Marcha contra as guitarras elétricas”, organizada por defensores da MPB Contra o sucesso pop da Jovem Guarda.
                    <br/>
                    <br/>
                    No mesmo mês, no dia 26 de julho, Nara casa com o cineasta Carlos (Cacá) Diegues no apartamento de seus pais, na Avenida Atlântica.
                    <br/>
                    <br/>
                    Nara grava mais um disco pela Philips, intitulado simplesmente Nara, com capa de Lan e repertório com canções que iam de antigos nomes como João de Barro e Ari Barroso a novos compositores como Edu Lobo e a estreante Sueli Costa.
                    <br/>
                    <br/>
                    Participa dos festivais do ano cantando A estrada e o violeiro com Sidnei Miller no Festival de Música Popular da Rede Record e Carolina, de Chico Buarque no II Festival Internacional da Canção.
                    <br/>
                    <br/>
                    Viaja para Europa com Cacá Diegues e faz apresentações em Paris.
                    <br/>
                    <br/>
                    Participa do filme Garota de Ipanema de Leon Hirszman e Vinícius de Moraes.
                </p>

                <div className="absolute left-[2%] top-[413.5%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl848.jpg"
                            width={350}
                            height={200}
                            alt="Nara Leão e Chacrinha, 1966"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara Leão e Chacrinha, 1966</p>
                </div>

                <h2>1968</h2>
                <p>
                    Abre o ano estreando o show Tique-Taque no Teatro de Bolso, em Ipanema, ao lado do conjunto vocal Momento Quatro. Nesse show, Nara cantava um repertório que aliava os novos tempos em canções como “Tropicália” de Caetano Veloso e clássicos como “Três apitos” de Noel Rosa e “Chega de Saudade” de Tom Jobim e Vinícius e Moraes.
                    <br/>
                    <br/>
                    Ao lado de Cacá Diegues, participa intensamente das manifestações públicas contra o regime militar.
                    <br/>
                    <br/>
                    Em primeiro de abril, quatro anos após o golpe militar e logo após o assassinato do estudante Édson Luís, Nara publica no jornal Última Hora o contundente texto “É preciso não cantar” na coluna “Roda Viva”, de Nelson Mota.
                    <br/>
                    <br/>
                    Em Julho Nara canta “O tema dos inconfidentes” no Teatro Municipal do Rio de Janeiro durante o espetáculo Romanceiro da Inconfidência, adaptação de Flávio Rangel para a obra de Cecília Meireles.
                    <br/>
                    <br/>
                    Em agosto é lançado seu novo disco sem título, trazendo apenas sua foto na capa. O repertório escolhido e os arranjos de Rogério Duprat sinalizavam a sua afinidade com os compositores ligados ao momento tropicalista na música popular brasileira. Caetano Veloso está presente no disco com o bolero “Lindonéia” e com as parcerias com Torquato Neto “Deus vos salve essa casa santa” e “Mamãe coragem”.
                    <br/>
                    <br/>
                    Participa do disco coletivo Tropicalia ou Panis et circenses com a gravação de “Lindonéia”, composição de Caetano Veloso feita a pedido da cantora e inspirada em uma obra do pintor Rubens Gerchman.
                </p>

                <h2>1969</h2>
                <p>
                    Ano em que o regime militar fecha o cerco sobre a sociedade. Nesse período, Nara diminui bastante suas atividades musicais no Brasil.
                    <br/>
                    <br/>
                    Em abril ela participa de uma temporada de shows em Portugal ao lado de Chico Buarque e Vinícius de Moraes, ambos moradores da Europa durante esse período.
                    <br/>
                    <br/>
                    Grava e lança do disco Coisas do Mundo, com repertório que trazia, além do samba-título de Paulinho da Viola, algumas versões de sua autoria para músicas de Rolando Alarcón e Jacques Brel e canções de Caetano Veloso, Jards Macalé e Sidnei Miller.
                    <br/>
                    <br/>
                    Em agosto, numa entrevista concedia a Tarso de Castro para o Pasquim, dá por encerrada sua carreira de cantora.
                    <br/>
                    <br/>
                    No fim do ano, Nara deixa o país com Cacá Diegues para viverem um período de exílio na Europa. Moram em Paris, onde Nara passa a ter uma vida cotidiana longe da fama que a acompanhava – e a incomodava – no Brasil.
                </p>

                <div className="absolute right-[2%] top-[525%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl854.jpg"
                            width={350}
                            height={200}
                            alt="Nara Leão, Guilherme Araújo e Cacá Diegues. Estúdios da BBC de Londres, 1969"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara Leão, Guilherme Araújo e Cacá Diegues.<br/>Estúdios da BBC de Londres, 1969</p>
                </div>

                <h2>1970</h2>
                <p>
                    Período em que Nara vive em Paris ao lado de Cacá Diegues.
                    <br/>
                    <br/>
                    Trabalha em apresentações esparsas e faz versões de músicas brasileiras para cantoras francesas como François Hardy.
                    <br/>
                    <br/>
                    Fica Grávida de sua primeira filha, Isabel, que nasce no dia 28 de setembro.
                    <br/>
                    <br/>
                    Ainda em Paris resolve gravar para Philips um álbum duplo com vinte e quatro canções do período da Bossa Nova. O disco traz composições de Tom Jobim com seus parceiros Newton Mendonça, Vinícius de Moraes e Chico Buarque, além de canções de Carlos Lyra, Johnny Alf e Baden Powell. Gravado apenas com violão e piano e com a participação da cantora e violonista Tuca, o disco ganhou arranjos de cordas de Luis Eça e Rogério Duprat e foi lançado com o título Dez anos depois.
                </p>

                <h2>1971</h2>
                <p>
                    Nara Leão e Cacá Diegues voltam a morar no Brasil.
                    <br/>
                    <br/>
                    Em um ano de poucos trabalhos, Nara dá algumas entrevistas e participa do disco da Philips Os Maiores sambas-enredos de todos os tempos, com o samba “Nordeste, seu povo, seu canto e sua glória”, de Wilson Diabo, Maneco e Heitor.
                    <br/>
                    <br/>
                    Grava um compacto duplo trazendo quatro versões de músicas estrangeiras, entre elas “Pai e filho”, uma versão de Cacá Diegues para “Father and son”, de Cat Stevens. As outras três canções eram versões de Nara para músicas de Georges Moustaki.
                    <br/>
                    <br/>
                    É lançado pela Philips o álbum duplo Dez anos depois.
                </p>

                <h2>1972</h2>
                <p>
                    Em 17 de janeiro nasce o segundo filho de Nara Leão e Cacá Diegues, Francisco. Nara participa como atriz ao lado de Maria Bethânia e Chico Buarque do filme Quando o carnaval chegar dirigido pelo marido Cacá Diegues.
                    <br/>
                    <br/>
                    No mesmo ano, a trilha sonora do filme é lançada em LP pela Philips com Nara cantando “Mais uma estrela” de Bonfiglio de Oliveira e Herivelto Martins e “Soneto” de Chico Buarque.
                    <br/>
                    <br/>
                    É convidada para participar como presidente da comissão julgadora do VII Festival Internacional da Canção, realizado no Maracanãzinho. Após seguidas confusões entre a organização do festival, a censura e comissão julgadora, Nara é destituída da presidência com o resto dos jurados.
                    <br/>
                    <br/>
                    Em agosto, faz uma série de apresentações na boate Flag, no Rio de Janeiro. O registro dessa apresentação seria lançado em 1976 em um mini-LP com o título Palco, corpo e alma.
                </p>

                <div className="absolute left-[2%] top-[634%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl784.jpg"
                            width={350}
                            height={200}
                            alt="Nara e seus filhos Francisco e Isabel"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara e seus filhos Francisco e Isabel</p>
                </div>

                <h2>1973</h2>
                <p>
                    Nara inicia o ano apoiando a carreira de um jovem cantor cearense que logo faria sucesso, chamado Fagner. Ela participa de seu primeiro disco e divide com ele o palco nos shows de lançamento do disco, em fevereiro.
                    <br/>
                    <br/>
                    Participa como atriz ao lado de Anecy Rocha do filme Lira do Delírio, de Walter Lima Junior.
                    <br/>
                    <br/>
                    Inicia uma série de shows com Chico Buarque e o MPB-4, estreando o Circuito Universitário, projeto idealizado por Benil Santos para percorrer as universidades com shows de música popular brasileira.
                    <br/>
                    <br/>
                    Em junho, faz shows em Curitiba ao lado de Fagner.
                    <br/>
                    <br/>
                    Em agosto grava um programa de televisão da Rede Bandeirante ao lado de Chico Buarque, Vinícius de Moraes e Toquinho. Participa também do espetáculo Phono 73, promovido pela gravadora Philips com todo seu elenco e transformado em três LPs com o mesmo título. Nara canta “Diz que fui por aí” de Zé Ketti e H. Rocha e “Quinze anos”, de Naire e Paulinho Tapajós.
                    <br/>
                    <br/>
                    Inicia sua volta aos bancos escolares, terminando o segundo grau, abandonado em prol da carreira da cantora ainda em 1958. No ano seguinte, Nara faz o vestibular para cursar psicologia na Pontífice Universidade Católica do Rio de Janeiro – PUC.
                </p>

                <h2>1974</h2>
                <p>
                    Ano em que Nara volta a gravar um LP pela Philips. Produzido por seu amigo de juventude Roberto Menescal, Meu primeiro amor é um disco pessoal, em que a cantora grava as canções que tocava ao violão para seus filhos pequenos.
                    <br/>
                    <br/>
                    Participa de quatro discos da famosa Coleção Marcus Pereira sobre música folclórica brasileira, cantando canções nos LPs dedicados à Música Popular do Centro Oeste/Sudeste.
                    <br/>
                    <br/>
                    Grava o compacto simples A senha do novo Portugal, com a canção “Grandola, vila morena”, de José Afonso, música que marcou o período da Revolução dos Cravos em Portugal.
                    <br/>
                    <br/>
                    Nara é aprovada no vestibular de Psicologia na PUC-RJ.
                </p>

                <h2>1975</h2>
                <p>A gravadora Philips lança o disco Meu primeiro amor. Por ser um disco sem apelo comercial, a cantora não faz shows de divulgação. Mesmo assim, ganha o prêmio de Melhor Cantora do Ano da Associação dos Críticos de Arte de São Paulo.</p>
            
                <h2>1977</h2>
                <p>
                    Após um período dedicado aos seus estudos de psicologia e aos filhos, Nara retorna ao universo da música popular, gravando o disco Meus amigos são um barato. Um disco com parcerias com alguns de seus amigos da Bossa Nova, como Tom, João Donato, Menescal e Boscôli, amigos compositores, como Gilberto Gil, Chico Buarque, Caetano Veloso e Edu Lobo e com novos amigos como, Dominguinhos e Sivuca.
                    <br/>
                    <br/>
                    Volta a fazer shows e participa com Dominguinhos da bem sucedida série Seis e meia, no teatro João Caetano, produzida por Sérgio Cabral.
                    <br/>
                    <br/>
                    Participa cantando seis músicas no disco Os Saltimbancos, de Chico Buarque, Sérgio Barsoti e Luíz Enriquez.
                    <br/>
                    <br/>
                    Nara e Cacá Diegues se separam.
                </p>

                <h2>1978</h2>
                <p>
                    Nara sai em bem sucedida turnê nacional com um show que reunia Dominguinhos e os grupos Ritmos Nordestinos e Os Carioquinhas. Esse grupo de choro do Rio de Janeiro trazia entre seus componentes os muito jovens violonistas Raphael Rabelo e Maurício Carrilho e a cavaquinista Luciana Rabelo.
                    <br/>
                    <br/>
                    Gravação e lançamento do surpreendente disco E que tudo mais vá para o inferno, dedicado inteiramente à obra de Roberto e Erasmo Carlos.
                </p>

                <h2>1979</h2>
                <p>
                    Ano em que Nara descobre problemas de saúde. Nara grava e lança em abril o disco Com açúcar e com afeto, que assim como o disco anterior, era todo dedicado ao repertório de um compositor. Dessa vez, ela dedica o disco às canções de seu amigo Chico Buarque.
                    <br/>
                    <br/>
                    Durante o ano, faz uma série de viagens para divulgação do disco, dando entrevistas para rádios e televisão. Algumas vezes, sente-se mal durante as entrevistas.
                </p>

                <h2>1981</h2>
                <p>
                    Apresentação no Festival de Guarujá.
                    <br/>
                    <br/>
                    Recolhida dos shows em função de seus problemas de saúde, Nara se dedica ainda mais ao violão. Passa a ter aulas com o jovem professor Almir Chediak.
                    <br/>
                    <br/>
                    Nara grava e lança o disco Romance Popular, feito em parceria com Fagner e Fausto Nilo. Além dos compositores, que cuidam da produção e do repertório, o LP conta com participações de músicos como Robertinho do Recife e Geraldo Azevedo e arranjos de músicos como seu amigo Menescal, Oberdan, Lincoln Olivetti e Eduardo Souto Neto.
                    <br/>
                    <br/>
                    Em abril Nara faz uma mini-temporada de três shows para o lançamento de Romance Popular na boate Horse Neck, no Rio de Janeiro.
                    <br/>
                    <br/>
                    Em agosto Nara estréia em São Paulo, no teatro Tuca, o show Romance Popular, com direção de Flávio Rangel.
                </p>

                <h2>1982</h2>
                <p>
                    Estréia em janeiro o show Romance Popular no Rio de Janeiro, no hotel Rio Palace.
                    <br/>
                    <br/>
                    Em maio Nara entra em estúdio para gravar seu novo disco. Dessa vez, teria como parceiro João Donato em mais uma produção do amigo Roberto Menescal. O disco é lançado no final do ano com o título Nasci para bailar.
                    <br/>
                    <br/>
                    Participa do festival MPB Shell, promovido pela Rede Globo, com a canção “Maravilha curativa”, de Miltinho e Kledir Amaral.
                    <br/>
                    <br/>
                    Nara participa intensamente do processo de abertura política durante as primeiras eleições diretas para governador no Rio de Janeiro depois da ditadura militar. A cantora inicialmente comparece a comícios e eventos a favor de candidatos do PMBD como Arthur da Távola e Miro Teixeira. No dia da eleição, porém, após muitas dúvidas e debates com amigos e personalidades, Nara votou no candidato do PDT Leonel Brizola.
                    <br/>
                    <br/>
                    Em dezembro estréia o show Nasci para bailar no Teatro da Lagoa, Rio de Janeiro. Durante três semanas de casa cheia, Nara reedita sua parceria com os músicos dos Carioquinhas, agora reagrupados na Camerata Carioca e incorpora ritmistas do Bloco Cacique de Ramos. O show ainda viajaria por diversas cidades do país.
                </p>

                <h2>1983</h2>
                <p>
                    No início do ano Nara participa ao lado de Chico Buarque e Fagner de um grande show de desagravo para o cantor português Sérgio Godinho, detido pela Polícia Federal brasileira há mais de dois meses.
                    <br/>
                    <br/>
                    Divulga o disco e o show Nasci para bailar em programas de televisão e apresentações ao redor do país.
                    <br/>
                    <br/>
                    Ainda nesse ano, Nara grava e lança o disco Meu samba encabulado, gravado em parceria com a Camerata Carioca, Paulo Moura e os ritmistas Bira, Ubirani e Joviano, do Cacique de Ramos. O disco tem o repertório todo dedicado ao samba, com novos e antigos compositores do gênero.
                    <br/>
                    <br/>
                    Participa do Projeto Pixinguinha ao lado da Camerata Carioca, cumprindo um roteiro de shows por várias cidades brasileiras. Nas apresentações, o repertório do disco Meu samba encabulado.
                </p>

                <div className="absolute right-[2%] top-[930%] p-4 4 bg-yellow-300">
                    <Link href="/galeria">                    
                        <Image
                            src="http://www.naraleao.com.br/_imgs/galeria/fotos/nl752.jpg"
                            width={350}
                            height={200}
                            alt="Nara, Menescal e Chico Buarque"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Nara, Menescal e Chico Buarque</p>
                </div>

                <h2>1984</h2>
                <p>
                    Nara se apresenta pela primeira vez apenas acompanhada de seu violão no show Com açúcar e com afeto, no antigo teatro BNH, atual Teatro Nelson Rodrigues.
                    <br/>
                    <br/>
                    Em fevereiro participa dos eventos públicos em prol das “Diretas Já”, manifestação a favor da eleição direta para Presidente no país.
                    <br/>
                    <br/>
                    Estrela na TV Bandeirantes o programa Nara Leão 84, com direção de Cláudio Petraglia e participação de amigos e familiares.
                    <br/>
                    <br/>
                    Grava e lança o disco Abraços e beijinhos e carinhos sem ter fim, com arranjo e participação do pianista César Camargo Mariano. O disco marca a volta de Nara ao repertório da Bossa Nova.
                    <br/>
                    <br/>
                    Em julho participa em São Paulo da comemoração pelos dez anos da Fundação Vianinha, em homenagem ao seu amigo e um dos escritores do espetáculo Opinião, Oduvaldo Vianna Filho.
                </p>

                <h2>1985</h2>
                <p>
                    Nara inicia o ano com uma bem sucedida mini-temporada de voz e violão na boate People, no Rio de Janeiro.
                    <br/>
                    <br/>
                    Grava com seu amigo e produtor Roberto Menescal, dessa vez tocando violão, mais um disco com o repertório relacionado à Bossa Nova e outros estilos: Um cantinho e um violão. Lançado em maio, o disco foi bem recebido pela crítica e pelo público.
                    <br/>
                    <br/>
                    Recebe dois convites para apresentações de voz e violão no exterior, em várias cidades de Portugal, em Paris e em várias cidades do Japão. Essas apresentações nas cidades japonesas foram acompanhadas por Roberto Menescal e a Camerata Carioca. Seus shows iniciaram uma relação permanente não só de Nara, mas da Música Popular Brasileira com o país oriental.
                    <br/>
                    <br/>
                    A viagem ao Japão ainda rende a produção do primeiro Compact Disc de um artista brasileiro. Gravado durante o mês de junho na Polygram do Japão e com o repertório todo dedicado à Bossa Nova, o título escolhido foi Garota de Ipanema.
                </p>

                <h2>1986</h2>
                <p>
                    Período em que se agravam os problemas de saúde de Nara. Grande parte do seu tempo é dividido entre sua recuperação em tratamentos e sua ainda ativa carreira musical.
                    <br/>
                    <br/>
                    É lançado no Brasil o disco Garota de Ipanema, gravado no Japão durante o ano anterior.
                </p>

                <h2>1987</h2>
                <p>
                    Com um quadro de melhora, volta a dar shows com freqüência, quase sempre ao lado de Roberto Menescal.
                    <br/>
                    <br/>
                    Em abril, ambos se apresentam em uma temporada de shows na boate People, no Rio de Janeiro.
                    <br/>
                    <br/>
                    Em Junho, Nara e Roberto Menescal fazem uma temporada de shows no 150 Nightclub, boate do hotel Maksud Plaza, São Paulo.
                    <br/>
                    <br/>
                    Em agosto é lançado o disco Meus sonhos dourados, com clássicos da música popular norte-americana em versões brasileiras feitas por ela e outros como Ronaldo Bôscoli e Fátima Guedes.
                </p>

                <h2>1988</h2>
                <p>
                    Mais uma temporada de shows com grande sucesso – cinco semanas – de Nara e Menescal na boate People, no Rio de Janeiro. Os dois viajam por várias cidades com seu show.
                    <br/>
                    <br/>
                    Participa de comemorações dos trinta anos da Bossa Nova, com a apresentação em um show na praia de Copacabana ao lado de Carlos Lyra, Luis Eça e do conjunto Garganta Profunda.
                    <br/>
                    <br/>
                    Em novembro a TV Manchete dedica um especial à dupla Nara Leão e Roberto Menescal.
                    <br/>
                    <br/>
                    Durante o ano, Nara elabora e divide com Nelson Motta uma nova série de versões de músicas norte-americanas para gravar em seu último disco de carreira, encomendado pela Polygram do Japão e intitulado My foolish heart.
                </p>

                <h2>1989</h2>
                <p>
                    A cantora realiza seu último show em uma mini-turnê por cidades do Norte do Brasil, apresentando-se em março no Iate Clube de Belém do Pará.
                    <br/>
                    <br/>
                    Nara Leão falece na Casa de Saúde São José, Rio de Janeiro, no dia 7 de junho.
                </p>

                <h2>2022</h2>
                <p>Em homenagem aos 80 anos da cantora, a série documental O Canto Livre de Nara Leão é lançado pela Globoplay.</p>
                <div className="absolute left-[2%] top-[1095%] p-4 pb-4 bg-yellow-300">
                    <Link href="https://globoplay.globo.com/o-canto-livre-de-nara-leao/t/fcfQvBWKVY/" target="_blank">                    
                        <Image
                            src={poster}
                            width={300}
                            alt="Pôster o Canto Livre de Nara Leão"
                        />
                    </Link>
                    <p className="border-0 pb-0 mb-0 text-right font-bold">Pôster o Canto Livre de Nara Leão</p>
                </div>
            </article>
        </>
    )
}