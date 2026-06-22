import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tags, imageUrl, demoUrl }) => {
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
          <a 
            href={demoUrl} 
            target="_blank"  
            rel="noopener noreferrer" 
          >
            Ver Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;