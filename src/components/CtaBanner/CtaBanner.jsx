import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './CtaBanner.module.css';

const CtaBanner = ({
  title = '¿Tenés una idea o un problema en tu negocio?',
  text = 'Contame qué necesitás y te respondo con una propuesta a medida. La primera consulta es gratis.',
}) => (
  <section className={styles.section}>
    <div className={styles.banner}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.actions}>
        <Button
          href={whatsappLink()}
          variant="whatsapp"
          onClick={() => trackEvent('Contact', { method: 'whatsapp_cta' })}
        >
          <Icon name="whatsapp" size={20} /> Escribime por WhatsApp
        </Button>
        <Button to="/contact" variant="outline">
          Prefiero el formulario
        </Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;
