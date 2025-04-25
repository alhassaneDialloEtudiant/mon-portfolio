import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // si tu es dans src/components

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MonPortfolio</div>
      <ul className="navbar__links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/skills">Compétences</Link></li>
        <li><Link to="/projects">Projets</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
