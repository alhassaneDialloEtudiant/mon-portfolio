import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Diallo Alhassane</div>

        <div className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>Accueil</NavLink></li>
          <li><NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>À propos</NavLink></li>
          <li><NavLink to="/skills" className="nav-link" onClick={() => setIsOpen(false)}>Compétences</NavLink></li>
          <li><NavLink to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projets</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
