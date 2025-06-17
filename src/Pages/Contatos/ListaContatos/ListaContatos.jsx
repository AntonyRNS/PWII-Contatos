import { useContext, useState } from "react";
import { ContatosContext } from "../Contatos";
import FormContato from "./FormContato";

export default function ListaContatos() {
  const { contatos, setContatoSelecionado } = useContext(ContatosContext);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <div className="col-md-9 border border-dark py-4 text-start bg-light h-100">
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {contatos.map((contato) => (
          <li
            key={contato.id}
            onClick={() => setContatoSelecionado(contato)}
            style={{ cursor: "pointer", padding: "0.5rem 0" }}
          >
            <strong>{contato.displayName}</strong> - {contato.telefone} - {contato.id}
          </li>
        ))}
      </ul>

      <button onClick={() => setMostrarFormulario(true)}>Adicionar contato</button>

      {mostrarFormulario && (
        <div className="mt-4">
          <FormContato onCancel={() => setMostrarFormulario(false)} />
        </div>
      )}
    </div>
  );
}
