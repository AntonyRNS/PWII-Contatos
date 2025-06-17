import { useAuth } from "../../Context/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="d-flex justify-content-between p-3 border-bottom">
      <h1>Gerenciador de Contatos</h1>
      <button className="btn btn-danger" onClick={logout}>
        Sair
      </button>
    </header>
  );
}
