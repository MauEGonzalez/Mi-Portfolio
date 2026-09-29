import { whatsappLink } from '../../data/siteConfig';
import { trackEvent } from '../../lib/analytics';
import Icon from '../Icon/Icon';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, featured = false }) => {
  const { title, type, description, highlights, tags, imageUrl, demoUrl } = project;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.imageContainer} tabIndex={-1}>
        <img src={imageUrl} alt={`Captura del proyecto ${title}`} loading="lazy" width="1600" height="1000" />
      </a>

      <div className={styles.content}>
        <span className={styles.type}>{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>

        {featured && highlights && (
          <ul className={styles.highlights}>
            {highlights.map((h) => (
              <li key={h}>
                <Icon name="check" size={16} /> {h}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.links}>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demo}>
            Ver proyecto <Icon name="external" size={16} />
          </a>
          <a
            href={whatsappLink(`Hola Mauro, vi el proyecto ${title} en tu web y quiero algo similar.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.similar}
            onClick={() => trackEvent('Contact', { method: 'whatsapp_project', project: title })}
          >
            Quiero algo así
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
