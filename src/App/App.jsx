import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';
import Home from '../Pages/Home/Home';
import Contatos from '../Pages/Contatos/Contatos';
import Sobre from '../Pages/Sobre/Sobre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header /> {/** HEADER */}
        <div className="container-fluid">
          <div className="row" style={{ minHeight: '80vh' }}>
            <div className="col-md-3 col-lg-2 bg-light border-end p-3">
              <Sidebar /> {/** SIDEBAR */}
            </div>
            <div className="col-md-9 col-lg-10 p-4">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/contatos" element={<Contatos />} />
                <Route path="/sobre" element={<Sobre />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer /> {/** FOOTER */}
      </BrowserRouter>
    </div>
  );
}

export default App;
