import '../styles/Footer.css'; // Assurez-vous que le chemin est correct
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Diallo Alhassane. Tous droits réservés.</p>
      
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/2250700000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
