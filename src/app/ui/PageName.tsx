export default function PageName({ name } : { name: string }) 
{
    return(
        <section className="flex justify-center">
            <h1 className="titulo-pagina">{name}</h1>
        </section>
    )
}