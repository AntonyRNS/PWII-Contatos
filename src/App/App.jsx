import './App.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row" style={{ minHeight: '80vh' }}>
          
          <div className="col-md-3 col-lg-2 bg-light border-end p-3">
            <Sidebar />
          </div>

          
          <div className="col-md-9 col-lg-10 p-4">
            <h1 className="border border-dark p-3">Teste</h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
