"use client"

import { FormEvent, FormEventHandler, useState } from "react"
import { Button } from "@nextui-org/button"

export function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        try{
            e.preventDefault()

            const target = e.target as typeof e.target & {
                name: { value: string };
                subject: { value: string };
                email: { value: string };
                message: { value: string };
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_PUBLICKEY,
                    name: target.name.value,
                    subject: target.subject.value,
                    email: target.email.value,
                    message: target.message.value,
                })
            })
            const result = await response.json()
            if(result.sucess) console.log(result)

            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        } catch(error) {
            console.log(error)
        }
    }

    function descartar() {
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }

    const preenchido = name.length != 0 && email.length != 0 && message.length != 0

    return(
        <>
            <form onSubmit={handleSubmit} className="flex flex-col align-center">
                <label htmlFor="name" className="required">Nome</label>
                <input required type="text" name="name" size={40} value={name} onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email" className="required">Email</label>
                <input required type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="subject">Assunto</label>
                <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>

                <label htmlFor="message" className="required">Mensagem</label>
                <textarea required name="message" cols={30} rows={5} value={message} onChange={(e) => setMessage(e.target.value)}/>

                <div className="flex justify-end mt-2">
                    <Button size="sm" type="submit" color={preenchido ? "success" : "default"} isDisabled={!preenchido}>Enviar</Button>
                    <Button size="sm" className="ml-2" color="danger" onPress={() => descartar()}>Descartar</Button>
                </div>
            </form>
        </>
    )
}