import { useEffect } from 'react';
import { SITE } from '../../data/siteConfig';

// Actualiza título, descripción y canonical según la página.
const Seo = ({ title, description, path = '' }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.role}`;

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE.url}${path}`);
  }, [title, description, path]);

  return null;
};

export default Seo;
