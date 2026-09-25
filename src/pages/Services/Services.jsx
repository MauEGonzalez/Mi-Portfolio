import Seo from '../../components/Seo/Seo';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import ProcessSteps from '../../components/ProcessSteps/ProcessSteps';
import Faq from '../../components/Faq/Faq';
import CtaBanner from '../../components/CtaBanner/CtaBanner';
import { services } from '../../data/services';
import styles from './Services.module.css';

const Services = () => (
  <>
    <Seo
      title="Servicios"
      description="Sistemas de gestión a medida con facturación ARCA, páginas web, landing pages, tiendas online y mantenimiento. Consultá sin cargo."
      path="/servicios"
    />

    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          as="h1"
          eyebrow="Servicios"
          title="Soluciones a medida para tu negocio"
          subtitle="Desde una landing para tus campañas hasta un sistema completo para gestionar ventas, stock y facturación."
        />
        <div className={styles.grid}>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} detailed />
          ))}
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle eyebrow="Cómo trabajo" title="De la idea a tu proyecto funcionando" />
        <ProcessSteps />
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de empezar" />
        <Faq />
      </div>
    </section>

    <CtaBanner />
  </>
);

export default Services;
