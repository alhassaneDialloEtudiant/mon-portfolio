import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/photos/logo.png'; // Ton logo
import '../styles/Navbar.css'; // Le CSS mis à jour

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo + slogan */}
        <div className="navbar__branding" onClick={closeMenu}>
          <img src={logo} alt="Logo Diallo Alhassane" className="navbar__logo" />
          <span className="navbar__slogan">Innover, créer, réussir</span>
        </div>

        {/* Menu hamburger pour mobile */}
        <button className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Liens de navigation */}
        <ul className={`navbar__links ${isOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Accueil</NavLink></li>
          <li><NavLink to="/apropos" className="nav-link" onClick={closeMenu}>À propos</NavLink></li>
          <li><NavLink to="/projects" className="nav-link" onClick={closeMenu}>Projets</NavLink></li>
          <li><NavLink to="/agence" className="nav-link" onClick={closeMenu}>Mon Agence</NavLink></li>
          <li><NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;