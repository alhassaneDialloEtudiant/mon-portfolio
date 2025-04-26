import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
// Les autres pages sont en préparation (à activer plus tard)
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/mon-portfolio"> {/* ✅ pour GitHub Pages */}
      <Navbar />

      <main> {/* ✅ structure flex pour footer collé */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />

          {/* À activer plus tard */}
          {/*
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          */}

          {/* Redirection vers la page d’accueil si URL inconnue */}
          
        </Routes>
      </main>
      <Footer />
    </Router>
    
  );
}

export default App;
