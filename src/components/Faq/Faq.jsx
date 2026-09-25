import { faqs } from '../../data/faq';
import Icon from '../Icon/Icon';
import styles from './Faq.module.css';

const Faq = () => (
  <div className={styles.list}>
    {faqs.map((item) => (
      <details key={item.q} className={styles.item}>
        <summary>
          {item.q}
          <Icon name="chevron" size={20} className={styles.chevron} />
        </summary>
        <p>{item.a}</p>
      </details>
    ))}
  </div>
);

export default Faq;
