import { processSteps } from '../../data/services';
import styles from './ProcessSteps.module.css';

const ProcessSteps = () => (
  <ol className={styles.steps}>
    {processSteps.map((step, i) => (
      <li key={step.title} className={styles.step}>
        <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
