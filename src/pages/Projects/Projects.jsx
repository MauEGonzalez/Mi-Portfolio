import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Importación de imágenes desde la carpeta assets
import imgPatrimony from '../../assets/patrimony-web.jpg';
import imgIcoBatista from '../../assets/ico-batista.jpg';
import imgFiguStore from '../../assets/figu-store.jpg';
import imgPoleManager from '../../assets/PoleManagerweb.jpeg'; // Nueva imagen agregada

// Array de proyectos actualizado con PoleManager y sin las propiedades repoUrl
const projectsData = [
  {
    title: "PoleManager",
    description: "Software de gestión integral para barberías, optimizando la administración de turnos, clientes y control de negocio.",
    tags: ["React", "Node.js", "MongoDB", "Softwares de Gestión"],
    imageUrl: imgPoleManager,
    demoUrl: "https://www.polemanagerweb.com/",
  },
  {
    title: "Patrimony Web",
    description: "Una landing page moderna para una startup de finanzas, enfocada en la experiencia de usuario y visualización de datos.",
    tags: ["React", "CSS Modules", "Responsive"],
    imageUrl: imgPatrimony,
    demoUrl: "https://patrimony-app.vercel.app/",
  },
  {
    title: "Sitio Web Ico Batista",
    description: "Sitio web portfolio para la marca de ropa de Ico Batista, optimizado para destacar contenido visual con un diseño minimalista.",
    tags: ["JavaScript", "HTML5", "CSS Grid"],
    imageUrl: imgIcoBatista,
    demoUrl: "https://ico-batista-web.vercel.app/",
  },
  {
    title: "FiguStore",
    description: "E-commerce funcional de venta de figuras coleccionables de anime, con carrito de compras y gestión dinámica de productos.",
    tags: ["React", "Firebase", "Context API"],
    imageUrl: imgFiguStore,
    demoUrl: "https://figustoreapp.vercel.app/", 
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects"> 
      
      <h2 className={styles.title}>Mis Proyectos</h2> 
      
      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;