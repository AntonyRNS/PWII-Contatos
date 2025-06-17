export default function Footer() {
  return (
    <footer
      className="border-top border-dark py-3 text-center shadow-sm"
      style={{ backgroundColor: "#981A12" }}
    >
      <p className="mb-0 text-white fw-semibold" style={{ fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Gerenciador de Contatos. Todos os direitos reservados.
      </p>
    </footer>
  );
}
