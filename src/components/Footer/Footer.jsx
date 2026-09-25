import { Link } from 'react-router-dom';
import { SITE, whatsappLink } from '../../data/siteConfig';
import Icon from '../Icon/Icon';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <div className={styles.brand}>
        <img src="/favicon-32x32.png" alt="" width="32" height="32" />
        <div>
          <strong>{SITE.name}</strong>
          <span>Sistemas de gestión, webs y tiendas online.</span>
        </div>
      </div>

      <nav className={styles.links} aria-label="Pie de página">
        <Link to="/servicios">Servicios</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/about">Sobre mí</Link>
        <Link to="/contact">Contacto</Link>
      </nav>

      <div className={styles.social}>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Icon name="whatsapp" size={20} />
        </a>
        <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Icon name="instagram" size={20} />
        </a>
      </div>
    </div>
    <p className={styles.copy}>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
