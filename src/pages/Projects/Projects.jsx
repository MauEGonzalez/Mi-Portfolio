import Seo from '../../components/Seo/Seo';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CtaBanner from '../../components/CtaBanner/CtaBanner';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <Seo
        title="Proyectos"
        description="Sistemas de gestión, páginas web y tiendas online que desarrollé: Zentia, PoleManager, Patrimony, Ico Batista y FiguStore."
        path="/projects"
      />

      <section className={styles.projectsSection}>
        <SectionTitle
          as="h1"
          eyebrow="Portfolio"
          title="Proyectos"
          subtitle="Una selección de sistemas y sitios que desarrollé de punta a punta."
        />

        <div className={styles.featuredList}>
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        <h2 className={styles.subTitle}>Webs y tiendas online</h2>
        <div className={styles.grid}>
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <CtaBanner title="¿Querés un proyecto como estos?" />
    </>
  );
};

export default Projects;
