import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    className={styles.float}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribime por WhatsApp"
    onClick={() => trackEvent('Contact', { method: 'whatsapp_float' })}
  >
    <Icon name="whatsapp" size={30} />
  </a>
);

export default WhatsAppButton;
