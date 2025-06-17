import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
            navigate("/contatos");
        } else {
            alert("Credenciais inválidas");
        }
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh",
                background: "#f8f9fa",
            }}
        >
            <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: 400 }}>
                <h2 className="text-center mb-4" style={{ color: "#981A12" }}>
                    Acesse seus Contatos
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Usuário</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn w-100 text-white"
                        style={{ backgroundColor: "#981A12" }}
                    >
                        Entrar
                    </button>
                    <p className="text-center mt-3">
                        Não tem conta? <Link to="/register">Cadastre-se</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}
