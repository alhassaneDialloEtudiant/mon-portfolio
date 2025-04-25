import '../styles/Footer.css'; // Assurez-vous que le chemin est correct
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© {new Date().getFullYear()} Diallo Alhassane. Tous droits réservés.</p>
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/share/1BEAsx2J1A/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/+33753846170" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/alhassane-diallo-5b183229a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/alhassaneDialloEtudiant" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
