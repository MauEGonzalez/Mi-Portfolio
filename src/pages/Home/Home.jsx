import Seo from '../../components/Seo/Seo';
import Hero from '../../components/Hero/Hero';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import Faq from '../../components/Faq/Faq';
import CtaBanner from '../../components/CtaBanner/CtaBanner';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { services } from '../../data/services';
import { projects } from '../../data/projects';
import styles from './Home.module.css';

const Home = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Seo
        description="Desarrollo sistemas de gestión a medida, páginas web y tiendas online para pymes, comercios y emprendedores. Pedí tu presupuesto sin cargo."
        path="/"
      />

      <Hero />

      <section className={styles.section} id="servicios">
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Servicios"
            title="¿En qué te puedo ayudar?"
            subtitle="Soluciones digitales pensadas para que tu negocio venda más y trabaje mejor."
          />
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className={styles.center}>
            <Button to="/servicios" variant="outline">
              Ver detalle de servicios <Icon name="arrow" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Proyectos destacados"
            title="Productos propios, de la idea al lanzamiento"
            subtitle="Diseñé, desarrollé y lancé estos sistemas de punta a punta. La misma experiencia que pongo en tu proyecto."
          />
          <div className={styles.featuredList}>
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} featured />
            ))}
          </div>
          <div className={styles.center}>
            <Button to="/projects" variant="outline">
              Ver todos los proyectos <Icon name="arrow" size={18} />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle
            eyebrow="Cómo trabajo"
            title="Un proceso simple y transparente"
            subtitle="Sabés en todo momento en qué etapa está tu proyecto."
          />
          <ProcessSteps />
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`}>
        <div className={styles.container}>
          <SectionTitle eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarme" />
          <Faq />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default Home;
