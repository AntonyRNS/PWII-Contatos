import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import Home from "../Pages/Home/Home";
import Contatos from "../Pages/Contatos/Contatos";
import Sobre from "../Pages/Sobre/Sobre";
import Login from "../Pages/Login/Login";
import ProtectedRoute from '../Context/ProtectedRoute'
import { AuthProvider, useAuth } from "../Context/AuthContext";
import Register from "../Pages/Register/Register";

function Layout({ children }) {
  const { user } = useAuth();

  return (
    <>
      {user && <Header />}
      <div className="container-fluid">
        <div className="row" style={{ minHeight: "80vh" }}>
          {user && (
            <div className="col-md-3 col-lg-2 bg-light border-end p-3">
              <Sidebar />
            </div>
          )}
          <div className={user ? "col-md-9 col-lg-10 p-4" : "col-12 p-4"}>
            {children}
          </div>
        </div>
      </div>
      {user && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contatos"
              element={
                <ProtectedRoute>
                  <Contatos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sobre"
              element={
                <ProtectedRoute>
                  <Sobre />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={<Navigate to="/home" />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}
