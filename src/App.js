import { Header } from './components/Header/Header';


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Inicio from './pages/Inicio';
import Vermas from './pages/Vermas';
import { Footer } from './components/Footer/Footer';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
        <div className="App">
          <Header />
          <div className='contenedor-principal'>
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route path="/About" element={<About />} />
            <Route path="/Vermas" element={<Vermas />} />
            <Route path="/Contacto" element={<Contacto />} />
          </Routes>
          </div>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
