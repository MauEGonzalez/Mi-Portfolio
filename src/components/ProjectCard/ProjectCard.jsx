import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tags, imageUrl, demoUrl, repoUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`Captura de pantalla del proyecto ${title}`} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          
          {/* --- AQUÍ ESTÁ LA SOLUCIÓN --- */}
          <a 
            href={demoUrl} 
            target="_blank"  // <-- Esto abre en una nueva pestaña
            rel="noopener noreferrer" // <-- Esto es por seguridad
          >
            Ver Demo
          </a>
          <a 
            href={repoUrl} 
            target="_blank"  // <-- Esto abre en una nueva pestaña
            rel="noopener noreferrer" // <-- Esto es por seguridad
          >
            Ver Código
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;