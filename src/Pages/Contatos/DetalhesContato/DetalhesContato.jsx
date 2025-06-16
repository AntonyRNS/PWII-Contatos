import { useContext } from "react";
import { ContatosContext } from "../Contatos";

export default function DetalhesContato() {
  const { contatoSelecionado, setContatoSelecionado, contatos, setContatos } = useContext(ContatosContext);

  if (!contatoSelecionado) {
    return (
      <div className="col-md-3 border border-dark py-4 bg-light h-100 d-flex flex-column">
        <p>Selecione um contato</p>
      </div>
    );
  }
  function removerContato(){
    const contatosFiltrados = contatos.filter(contato => contato.id !== contatoSelecionado.id);
    setContatos([...contatosFiltrados]);
    setContatoSelecionado(null)
    
  }

  return (
    <div className="col-md-3 border border-dark py-4 bg-light h-100 d-flex flex-column">
      <div
        className="mb-3"
        style={{
          flexBasis: '40%',
          backgroundColor: '#ccc',
          borderRadius: '8px',
        }}
      >
        <img
          src={contatoSelecionado.avatar || "https://via.placeholder.com/150"}
          alt="Foto do contato"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <div style={{ flexGrow: 1, overflowY: 'auto', textAlign: 'left' }}>
        <h5>{contatoSelecionado.displayName}</h5>
        <p>Email: {contatoSelecionado.email}</p>
        <p>Telefone: {contatoSelecionado.telefone}</p>
      </div>
      <div>
        <button onClick={removerContato}>Remover Contato</button>
      </div>
    </div>
  );
}
