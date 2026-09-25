// Configuración central del sitio: cambiá acá tus datos y se actualiza en toda la web.
export const SITE = {
  name: 'Mauro González',
  role: 'Desarrollador Web Full-Stack',
  url: 'https://www.maurogonzalezdev.com',
  whatsappNumber: '5491137896819',
  instagramUrl: 'https://www.instagram.com/maurogonzalez.dev/',
  contactApiBase: 'https://mi-portfolio-backend-702p.onrender.com',
};

export const DEFAULT_WA_TEXT =
  'Hola Mauro, vi tu web y me gustaría pedir un presupuesto para un proyecto.';

export const whatsappLink = (text = DEFAULT_WA_TEXT) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
