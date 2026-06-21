import React from 'react';
import styles from './About.module.css';
import fotoPerfil from '../../assets/foto-perfil.jpg';

// Importación de los 6 certificados desde la carpeta assets
import certDesarrolloWeb from '../../assets/Cert. Desarrollo Web.jpg';
import certJavascript from '../../assets/Cert. Javascript.jpg';
import certReact from '../../assets/Cert. React.jpg';
import certBack1 from '../../assets/Cert. Back 1.jpg';
import certBack2 from '../../assets/Cert. Back 2.jpg';
import certBack3 from '../../assets/Cert. Back 3.jpg';

const About = () => {
  // Array de certificados estructurado con título e imagen importada
  const certificatesData = [
    { title: "Desarrollo Web", img: certDesarrolloWeb },
    { title: "JavaScript", img: certJavascript },
    { title: "React", img: certReact },
    { title: "Backend 1: Programación Backend", img: certBack1 },
    { title: "Backend 2: Arquitectura Avanzada", img: certBack2 },
    { title: "Backend 3: Despliegue y Optimización", img: certBack3 },
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        {/* Contenedor Superior: Foto y Biografía */}
        <div className={styles.profileRow}>
          <div className={styles.imageContainer}>
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil de Mauro Gonzalez" 
              className={styles.profileImage} 
            />
          </div>
          <div className={styles.infoContainer}>
            <h2>Sobre Mí</h2>
            <p>
              ¡Hola! Soy <strong>Mauro Gonzalez</strong>, Desarrollador Web Full-Stack graduado en enero de 2026. Mi viaje en el mundo de la programación comenzó con una gran curiosidad por cómo las ideas se transforman en aplicaciones interactivas, y hoy se consolida con la capacidad de estructurar soluciones robustas tanto en el frontend como en el backend.
            </p>
            <p>
              Me especializo en el ecosistema de JavaScript, dominando el desarrollo de interfaces dinámicas con React y la arquitectura de servidores escalables utilizando Node.js, Express y MongoDB (MERN Stack). Mi enfoque está puesto en escribir código limpio, modular y eficiente.
            </p>
          </div>
        </div>

        {/* Contenedor Inferior: Nueva Sección de Certificados */}
        <div className={styles.certificatesContainer}>
          <h3>Certificaciones Obtenidas</h3>
          <div className={styles.certificatesGrid}>
            {certificatesData.map((cert, index) => (
              <a 
                key={index} 
                href={cert.img} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.certCard}
              >
                <div className={styles.certIcon}>📜</div>
                <h4>{cert.title}</h4>
                <p>CoderHouse</p>
                <span className={styles.viewBadge}>Ver Certificado</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;