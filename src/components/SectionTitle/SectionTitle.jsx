import styles from './SectionTitle.module.css';

const SectionTitle = ({ eyebrow, title, subtitle, as: Tag = 'h2' }) => (
  <div className={styles.wrapper}>
    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
    <Tag className={styles.title}>{title}</Tag>
    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  </div>
);

export default SectionTitle;
