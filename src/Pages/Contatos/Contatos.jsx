import { createContext, useState, useEffect, useContext } from "react";
import ListaContatos from "./ListaContatos/ListaContatos";
import DetalhesContato from "./DetalhesContato/DetalhesContato";
export const ContatosContext = createContext();
function ContatosProvider({ children }) {
  const [contatos, setContatos] = useState([]);
  const [contatoSelecionado, setContatoSelecionado] = useState(null);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/4cd55304-07ee-470a-93b1-d8100d1d29f2")
      .then((res) => res.json())
      .then((data) => setContatos(data));
  }, []);

  return (
    <ContatosContext.Provider
      value={{ contatos, contatoSelecionado, setContatoSelecionado }}
    >
      {children}
    </ContatosContext.Provider>
  );
}
export default function Contatos() {
  return (
    <ContatosProvider>
      <div className="row h-100">
        <ListaContatos />
        <DetalhesContato />
      </div>
    </ContatosProvider>
  );
}
