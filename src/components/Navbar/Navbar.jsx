import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <NavLink to="/" className={styles.logoLink}>
            <img 
              src="/favicon-32x32.png" 
              alt="Logo MG" 
              className={styles.logoImage} 
            />
            <span className={styles.logoText}>Mauro Gonzalez</span>
          </NavLink>
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Sobre Mí
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Proyectos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;