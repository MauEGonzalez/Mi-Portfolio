import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/servicios', label: 'Servicios' },
  { to: '/projects', label: 'Proyectos' },
  { to: '/about', label: 'Sobre mí' },
  { to: '/contact', label: 'Contacto' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú mobile al cambiar de página
  useEffect(() => setOpen(false), [pathname]);

  // Evita el scroll del fondo con el menú abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Principal">
        <NavLink to="/" className={styles.logoLink}>
          <img src="/favicon-32x32.png" alt="" width="32" height="32" className={styles.logoImage} />
          <span className={styles.logoText}>Mauro González</span>
        </NavLink>

        <button
          type="button"
          className={styles.toggle}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={26} />
        </button>

        <div id="menu-principal" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
            onClick={() => trackEvent('Contact', { method: 'whatsapp_navbar' })}
          >
            Pedí tu presupuesto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
