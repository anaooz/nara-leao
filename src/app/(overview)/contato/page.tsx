import { Metadata } from "next";
import { MdEmail } from "react-icons/md";
import { Form } from "./form";
import PageTitle from "@/app/ui/pagetitle";

export const metadata: Metadata = {
    title: "Contato"
}

export default function Contato() {

    return(
        <>
            <PageTitle name="Contato"/>
            <section className="conteudo-pagina flex justify-between">
                <div className="text-justify w-[40%]">
                    <h3 className="text-xl mb-2">Obrigado por entrar em contato</h3>
                    <p className="text-xs mb-6">Caso tenha alguma dúvida ou queira entrar em contato, preencha o formulário ao lado ou clique no endereço abaixo.</p>
                    <p className="flex font-bold"><a target="_blank" href="mailto:mateusmarchetti.vieira@gmail.com" className="flex hover:underline"><MdEmail className="mr-1 self-center"/>mateusmarchetti.vieira@gmail.com</a></p>
                </div>
                <div className="mx-5">
                    <Form/>
                </div>
            </section>
        </>
    )
}