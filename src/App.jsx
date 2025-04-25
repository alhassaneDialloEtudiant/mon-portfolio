import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import './App.css';
import Home from './pages/Home';

// Pages (on va les créer une à une)
//import Home from './pages/Home';
// import About from './pages/About';
// import Skills from './pages/Skills';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Menu de navigation */}
      <Navbar />

      {/* Routes vers les différentes pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        À décommenter au fur et à mesure qu'on ajoute les pages :
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;
