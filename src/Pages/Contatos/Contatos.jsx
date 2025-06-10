import DetalhesContato from "./DetalhesContato/DetalhesContato";
import ListaContatos from "./ListaContatos/ListaContatos";

export default function Contatos() {
  return (
    <div className="row h-100">
      <ListaContatos />
      <DetalhesContato />

    </div>
  );
}
