import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../cssComponents/footer.css'

export default function Footer() {
  return (
    <footer className="pokedex-footer">
      <div className="footer-content">
        <ul className="social-links">
          <li>
            <a
              href="https://github.com/alessandro-sartini"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alessandro-sartini-a123a6201/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </li>
        </ul>
        <div className="footer-text">
          <p>"Allena la tua curiosità, catturali tutti!"</p>
          <p className="footer-sign">Pokédex &copy; 2025</p>
        </div>
      </div>
    </footer>
  );
}