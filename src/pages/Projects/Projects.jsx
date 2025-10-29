import React from 'react';
import styles from './Projects.module.css'; // <-- 1. Importa los estilos
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Importa tus imágenes (asegúrate que los nombres coincidan en /src/assets/)
import imgPatrimony from '../../assets/patrimony-web.jpg';
import imgIcoBatista from '../../assets/ico-batista.jpg';
import imgFiguStore from '../../assets/figu-store.jpg'; // Revisa este nombre de archivo

const projectsData = [
  {
    title: "Patrimony Web",
    description: "Una landing page moderna para una startup de finanzas, enfocada en la experiencia de usuario.",
    tags: ["React", "CSS Modules", "Responsive"],
    imageUrl: imgPatrimony,
    demoUrl: "https://patrimony-app.vercel.app/",
    repoUrl: "https://github.com/MauEGonzalez/patrimony-app.git",
  },
  {
    title: "Sitio Web Ico Batista",
    description: "Sitio web portfolio para un artista, con galería de imágenes y diseño minimalista.",
    tags: ["JavaScript", "HTML5", "CSS Grid"],
    imageUrl: imgIcoBatista,
    demoUrl: "https://ico-batista-web.vercel.app/",
    repoUrl: "https://github.com/MauEGonzalez/ico-batista-web.git",
  },
  {
    title: "FiguStore",
    description: "E-commerce funcional de venta de figuras de anime, con carrito de compras y gestión de productos.",
    tags: ["React", "Firebase", "Context API"],
    imageUrl: imgFiguStore,
    demoUrl: "https://figustoreapp.vercel.app/", 
    repoUrl: "https://github.com/MauEGonzalez/FiguStore.git", 
  },
];

const Projects = () => {
  return (
    // <-- 2. Aplica la clase a la sección
    <section className={styles.projectsSection} id="projects"> 
      
      {/* <-- 3. Aplica la clase al título */}
      <h2 className={styles.title}>Mis Proyectos</h2> 
      
      {/* <-- 4. ESTA ES LA CLASE MÁS IMPORTANTE */}
      <div className={styles.grid}>
        
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;