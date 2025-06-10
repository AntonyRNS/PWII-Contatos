import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="border border-dark h-100" style={{ backgroundColor: '#d9cab3' }}>
      <aside className="sidebar">
        <nav className="d-flex flex-column pt-4 px-3">
          <Link 
            to="/home" 
            className="text-decoration-none text-black py-2 mb-2 border-bottom"
          >
            Home
          </Link>
          <Link 
            to="/contatos" 
            className="text-decoration-none text-black py-2 mb-2 border-bottom"
          >
            Contatos
          </Link>
          <Link 
            to="/sobre" 
            className="text-decoration-none text-black py-2"
          >
            Sobre
          </Link>
        </nav>
      </aside>
    </div>
  );
}
