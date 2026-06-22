import React from 'react';
import styles from './About.module.css';
import fotoPerfil from '../../assets/foto-perfil.jpg';

// Importación de los 6 certificados desde la carpeta assets
import certDesarrolloWeb from '../../assets/Cert. Desarrollo Web.png';
import certJavascript from '../../assets/Cert. Javascript.png';
import certReact from '../../assets/Cert. React.png';
import certBack1 from '../../assets/Cert. Back 1.png';
import certBack2 from '../../assets/Cert. Back 2.png';
import certBack3 from '../../assets/Cert. Back 3.png';

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
              ¡Hola! Mi nombre es <strong>Mauro Gonzalez</strong>. Soy un Desarrollador Web Full-Stack graduado de CoderHouse apasionado por la resolución de problemas. Me dedico a construir desde sitios web atractivos hasta softwares de gestión complejos que resuelven necesidades reales de negocio.
            </p>
            <p>
              Mi mayor fortaleza es la adaptabilidad técnica: no importa qué tan compleja sea la idea que tengas en la cabeza, yo me encargo de transformarla en una solución digital funcional y plasmarla en la pantalla con código de alto rendimiento.
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