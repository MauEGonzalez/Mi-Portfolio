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
        
        {/* Contenedor Superior: Foto, Redes Sociales y Biografía */}
        <div className={styles.profileRow}>
          <div className={styles.imageContainer}>
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil de Mauro Gonzalez" 
              className={styles.profileImage} 
            />
            
            {/* NUEVA BARRA DE REDES SOCIALES */}
            <div className={styles.socialBar}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.444-.048-3.298c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.999 0h.003zm-.544 1.466c.817-.037 1.055-.045 3.278-.045 2.223 0 2.461.008 3.278.045.756.035 1.167.16 1.439.266.361.14.618.307.889.578.272.271.439.529.579.89.106.272.232.683.266 1.44.038.816.046 1.054.046 3.278 0 2.223-.008 2.462-.046 3.278-.035.756-.16 1.167-.266 1.439a2.417 2.417 0 0 1-.578.889c-.272.271-.529.439-.89.579-.272.106-.683.232-1.44.266-.817.038-1.054.046-3.278.046-2.223 0-2.462-.008-3.278-.046-.756-.035-1.167-.16-1.439-.266a2.411 2.411 0 0 1-.889-.578 2.411 2.411 0 0 1-.578-.89c-.106-.272-.232-.683-.266-1.44-.038-.816-.046-1.054-.046-3.278 0-2.223.008-2.462.046-3.278.035-.756.16-1.167.266-1.439.14-.361.307-.618.578-.889.271-.272.529-.439.89-.579.272-.106.683-.232 1.44-.266zM8 3.891a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22zm0 1.466a2.644 2.644 0 1 1 0 5.288 2.644 2.644 0 0 1 0-5.288zm4.108-.34a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialLink}
                aria-label="TikTok"
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.infoContainer}>
            <h2>Sobre Mí</h2>
            <p>
              ¡Hola! Mi nombre es <strong>Mauro Gonzalez</strong>. Soy un Desarrollador Web Full-Stack graduado de CoderHouse apasionado por la resolución de problemas. Me dedicó a construir desde sitios web atractivos hasta softwares de gestión complejos que resuelven necesidades reales de negocio.
            </p>
            <p>
              Mi mayor fortaleza es la adaptabilidad técnica: no importa qué tan compleja sea la idea que tengas en la cabeza, yo me encargo de transformarla en una solución digital funcional y plasmarla en la pantalla con código de alto rendimiento.
            </p>
          </div>
        </div>

        {/* Contenedor Inferior: Sección de Certificados */}
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