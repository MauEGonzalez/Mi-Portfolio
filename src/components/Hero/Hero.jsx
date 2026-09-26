import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import fotoPerfil from '../../assets/foto-perfil.webp';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './Hero.module.css';

const trust = [
  'Creador de Zentia y PoleManager, software propio en producción',
  'Trato directo conmigo, sin intermediarios',
  'Webs rápidas y adaptadas a celulares',
];

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.dot} /> Disponible para nuevos proyectos
        </span>

        <h1 className={styles.title}>
          Software y páginas web que <span className={styles.highlight}>hacen crecer tu negocio</span>
        </h1>

        <p className={styles.lead}>
          Soy Mauro González, desarrollador full-stack. Creo <strong>sistemas de gestión a medida</strong>,{' '}
          <strong>páginas web</strong> y <strong>tiendas online</strong> para pymes, comercios y emprendedores
          que quieren ahorrar tiempo y conseguir más clientes.
        </p>

        <div className={styles.actions}>
          <Button
            href={whatsappLink()}
            variant="whatsapp"
            onClick={() => trackEvent('Contact', { method: 'whatsapp_hero' })}
          >
            <Icon name="whatsapp" size={20} /> Pedí tu presupuesto
          </Button>
          <Button to="/projects" variant="outline">
            Ver proyectos <Icon name="arrow" size={18} />
          </Button>
        </div>

        <ul className={styles.trust}>
          {trust.map((item) => (
            <li key={item}>
              <Icon name="check" size={18} /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.visual}>
        <div className={styles.photoWrap}>
          <img
            src={fotoPerfil}
            alt="Mauro González, desarrollador web"
            className={styles.photo}
            width="560"
            height="644"
            fetchPriority="high"
          />
        </div>
        <div className={`${styles.floatCard} ${styles.cardTop}`}>
          <strong>React + Node.js</strong>
          <span>Tecnología moderna</span>
        </div>
        <div className={`${styles.floatCard} ${styles.cardBottom}`}>
          <strong>Consulta gratis</strong>
          <span>Respuesta rápida por WhatsApp</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
