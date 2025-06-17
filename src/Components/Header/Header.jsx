import { useAuth } from "../../Context/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <div
      className="d-flex justify-content-between align-items-center border border-dark py-3 px-4"
      style={{ backgroundColor: "#981A12" }}
    >
      <p className="m-0 text-white fs-5">Gerenciador de Contatos</p>
      <button
        className="btn btn-light btn-sm"
        onClick={logout}
        style={{ fontWeight: "bold" }}
      >
        Sair
      </button>
    </div>
  );
}
