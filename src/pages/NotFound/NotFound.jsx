import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Página No Encontrada</h2>
      <p className={styles.description}>
        Lo siento, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className={styles.homeButton}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;