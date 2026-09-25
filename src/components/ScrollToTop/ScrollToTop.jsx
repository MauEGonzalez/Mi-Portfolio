import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';

// Vuelve arriba al cambiar de página y registra la visita en el Pixel.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
