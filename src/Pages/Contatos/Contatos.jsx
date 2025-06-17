import { createContext, useState, useEffect, useContext } from "react";
import ListaContatos from "./ListaContatos/ListaContatos";
import DetalhesContato from "./DetalhesContato/DetalhesContato";
import axios from 'axios';
export const ContatosContext = createContext();
function ContatosProvider({ children }) {
  const [contatos, setContatos] = useState([]);
  const [contatoSelecionado, setContatoSelecionado] = useState(null);

  useEffect(() => {
    async function buscarContatos() {
      const res = await fetch("https://run.mocky.io/v3/f6b584b6-06b1-4c7b-a803-573b5541c631");
      const json = await res.json();
      setContatos(json);
    }
    buscarContatos()
  }, []);
  
  // useEffect(()=>{
  //   axios.get('https://run.mocky.io/v3/f6b584b6-06b1-4c7b-a803-573b5541c631')
  //   .then(response => setContatos(response.data))
  // })



  return (
    <ContatosContext.Provider
      value={{ contatos, contatoSelecionado, setContatoSelecionado, setContatos }}
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
