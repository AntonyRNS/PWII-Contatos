import { useContext } from "react";
import { ContatosContext } from "../Contatos";
export default function ListaContatos() {
  const { contatos, setContatoSelecionado } = useContext(ContatosContext);
  console.log(contatos)
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
    </div>
  );
}
