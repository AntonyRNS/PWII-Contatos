import { useState, useContext } from "react";
import { ContatosContext } from "../Contatos";

export default function FormContato({ onCancel }) {
  const { contatos, setContatos, setContatoSelecionado } = useContext(ContatosContext);

  const [nome, setNome] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const novoId =
      contatos.length > 0 ? Math.max(...contatos.map(c => c.id)) + 1 : 1;

    const novoContato = {
      id: novoId,
      nome,
      displayName,
      email,
      telefone,
    };

    setContatos([...contatos, novoContato]);
    setContatoSelecionado(novoContato);

    setNome("");
    setDisplayName("");
    setEmail("");
    setTelefone("");

    if (onCancel) onCancel();
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border border-secondary rounded bg-light">
      <h5>Adicionar Novo Contato</h5>
      <div className="mb-2">
        <label className="form-label">Nome completo:</label>
        <input
          type="text"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Display Name:</label>
        <input
          type="text"
          className="form-control"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">E-mail:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label">Telefone:</label>
        <input
          type="text"
          className="form-control"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">Adicionar</button>
      {onCancel && (
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
}
