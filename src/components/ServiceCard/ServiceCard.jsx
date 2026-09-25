import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ service, detailed = false }) => (
  <article className={styles.card}>
    <div className={styles.icon}>
      <Icon name={service.icon} size={26} />
    </div>
    <h3 className={styles.title}>{service.title}</h3>
    <p className={styles.description}>{service.description}</p>

    {detailed && (
      <ul className={styles.features}>
        {service.features.map((f) => (
          <li key={f}>
            <Icon name="check" size={17} /> {f}
          </li>
        ))}
      </ul>
    )}

    <a
      href={whatsappLink(service.waText)}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      onClick={() => trackEvent('Contact', { method: 'whatsapp_service', service: service.id })}
    >
      Consultar <Icon name="arrow" size={17} />
    </a>
  </article>
);

export default ServiceCard;
