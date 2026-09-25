import Seo from '../../components/Seo/Seo';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import CtaBanner from '../../components/CtaBanner/CtaBanner';
import { SITE, whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import styles from './About.module.css';
import fotoPerfil from '../../assets/foto-perfil.webp';

import certDesarrolloWeb from '../../assets/Cert. Desarrollo Web.webp';
import certJavascript from '../../assets/Cert. Javascript.webp';
import certReact from '../../assets/Cert. React.webp';
import certBack1 from '../../assets/Cert. Back 1.webp';
import certBack2 from '../../assets/Cert. Back 2.webp';
import certBack3 from '../../assets/Cert. Back 3.webp';

const certificates = [
  { title: 'Desarrollo Web', img: certDesarrolloWeb },
  { title: 'JavaScript', img: certJavascript },
  { title: 'React', img: certReact },
  { title: 'Backend I: Programación Backend', img: certBack1 },
  { title: 'Backend II: Arquitectura Avanzada', img: certBack2 },
  { title: 'Backend III: Despliegue y Optimización', img: certBack3 },
];

const values = [
  {
    title: 'Entiendo tu negocio',
    text: 'Antes de escribir código, entiendo cómo trabajás. Así el sistema se adapta a vos y no al revés.',
  },
  {
    title: 'Hablás directo conmigo',
    text: 'Sin agencias ni intermediarios: la persona que te escucha es la misma que desarrolla.',
  },
  {
    title: 'Proyectos que funcionan',
    text: 'Desarrollé sistemas que hoy usan negocios reales para facturar, vender y organizarse.',
  },
];

const stack = ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'HTML y CSS', 'Vercel', 'Render'];

const About = () => (
  <>
    <Seo
      title="Sobre mí"
      description="Soy Mauro González, desarrollador web full-stack especializado en React y Node.js. Creo sistemas de gestión y webs para negocios."
      path="/about"
    />

    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.profileRow}>
          <div className={styles.imageContainer}>
            <img
              src={fotoPerfil}
              alt="Mauro González"
              className={styles.profileImage}
              width="560"
              height="644"
            />
            <div className={styles.socialBar}>
              <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <Icon name="instagram" size={22} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
                onClick={() => trackEvent('Contact', { method: 'whatsapp_about' })}
              >
                <Icon name="whatsapp" size={22} />
              </a>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <span className={styles.eyebrow}>Sobre mí</span>
            <h1>Hola, soy Mauro 👋</h1>
            <p>
              Soy <strong>desarrollador web full-stack</strong> y me especializo en <strong>React y Node.js</strong>.
              Me dedico a construir desde páginas web atractivas hasta sistemas de gestión completos que resuelven
              necesidades reales de negocio.
            </p>
            <p>
              Mi mayor fortaleza es la adaptabilidad: no importa qué tan compleja sea la idea que tengas en la cabeza,
              me encargo de transformarla en una solución digital simple de usar, rápida y lista para crecer con vos.
            </p>
            <div className={styles.actions}>
              <Button href={whatsappLink()} variant="whatsapp" onClick={() => trackEvent('Contact', { method: 'whatsapp_about' })}>
                <Icon name="whatsapp" size={20} /> Hablemos
              </Button>
              <Button to="/projects" variant="outline">Ver proyectos</Button>
            </div>
          </div>
        </div>

        <div className={styles.values}>
          {values.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <Icon name="check" size={22} />
              <h2>{v.title}</h2>
              <p>{v.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.twoCols}>
          <div>
            <h2 className={styles.blockTitle}>Tecnologías</h2>
            <div className={styles.stack}>
              {stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.blockTitle}>Formación</h2>
            <p className={styles.formation}>Carrera de Desarrollo Full-Stack en CoderHouse.</p>
            <ul className={styles.certList}>
              {certificates.map((c) => (
                <li key={c.title}>
                  <a href={c.img} target="_blank" rel="noopener noreferrer">
                    {c.title} <Icon name="external" size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </>
);

export default About;
