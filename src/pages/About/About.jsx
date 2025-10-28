import React from 'react';
import styles from './About.module.css';
import fotoPerfil from '../../assets/foto-perfil.jpg'; // Asegúrate que el nombre coincida

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
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
            ¡Hola! Soy Mauro Gonzalez, un apasionado desarrollador web en formación con base en Buenos Aires. Mi viaje en el mundo de la programación comenzó con una gran curiosidad por cómo las ideas se transforman en aplicaciones interactivas y funcionales.
          </p>
          <p>
            Actualmente estoy puliendo mis habilidades en Desarrollo Web en CoderHouse, donde me especializo en el ecosistema de JavaScript, particularmente con React para la creación de interfaces de usuario dinámicas y atractivas.
          </p>
          <div className={styles.certificatesContainer}>
            <h3>Certificados CoderHouse</h3>
            <ul>
              <li>✓ Carrera de Desarrollo Web</li>
              <li>✓ React.js</li>
              {/* Agrega más certificados aquí a medida que los obtengas */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;