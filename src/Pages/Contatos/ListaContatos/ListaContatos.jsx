import { useState, useEffect } from "react"
import DetalhesContato from "../DetalhesContato/DetalhesContato"

export default function ListaContatos() {
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        fetch("https://run.mocky.io/v3/4cd55304-07ee-470a-93b1-d8100d1d29f2")
            .then(response => response.json())
            .then(data => setContatos(data))
    }, [])
    console.log(contatos)
    return (

        <div className="col-md-9 border border-dark py-4 text-start bg-light h-100">
            <ul>
                {contatos.map((contato, index) => (
                    <li key={index}>
                        <strong>{contato.displayName}</strong> - {contato.telefone}
                    </li>
                ))}
            </ul>
        </div>

    )
}