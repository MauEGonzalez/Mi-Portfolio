import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../../components/Seo/Seo';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Seo title="Página no encontrada" />
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Página No Encontrada</h2>
      <p className={styles.description}>
        La página que buscás no existe o fue movida.
      </p>
      <Link to="/" className={styles.homeButton}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;