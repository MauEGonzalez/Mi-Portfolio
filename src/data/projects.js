import imgZentia from '../assets/dashZentia.webp';
import imgPoleManager from '../assets/PoleManagerweb.webp';
import imgPatrimony from '../assets/patrimony-web.webp';
import imgIcoBatista from '../assets/ico-batista.webp';
import imgFiguStore from '../assets/figu-store.webp';

export const projects = [
  {
    id: 'zentia',
    featured: true,
    type: 'Software de gestión',
    title: 'Zentia',
    description:
      'Sistema de gestión integral para empresas: facturación electrónica ARCA, inventario, proveedores, ventas y flujo de caja en un solo lugar.',
    highlights: ['Facturación ARCA integrada', 'Control de stock en tiempo real', 'Caja y reportes'],
    tags: ['React', 'Node.js', 'Base de datos'],
    imageUrl: imgZentia,
    demoUrl: 'https://www.zentiaweb.com/',
  },
  {
    id: 'polemanager',
    featured: true,
    type: 'Software de gestión',
    title: 'PoleManager',
    description:
      'Software para barberías que ordena turnos, clientes y la administración del negocio, para que el dueño se enfoque en atender.',
    highlights: ['Agenda de turnos', 'Ficha de clientes', 'Control del negocio'],
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: imgPoleManager,
    demoUrl: 'https://www.polemanagerweb.com/',
  },
  {
    id: 'patrimony',
    type: 'Landing page',
    title: 'Patrimony Web',
    description:
      'Landing page moderna para una startup de finanzas, enfocada en la experiencia de usuario y la visualización de datos.',
    tags: ['React', 'CSS Modules', 'Responsive'],
    imageUrl: imgPatrimony,
    demoUrl: 'https://patrimony-app.vercel.app/',
  },
  {
    id: 'ico-batista',
    type: 'Sitio web de marca',
    title: 'Ico Batista',
    description:
      'Sitio web para una marca de ropa, con diseño minimalista que pone el foco en las fotos y el producto.',
    tags: ['JavaScript', 'HTML5', 'CSS Grid'],
    imageUrl: imgIcoBatista,
    demoUrl: 'https://ico-batista-web.vercel.app/',
  },
  {
    id: 'figustore',
    type: 'Tienda online',
    title: 'FiguStore',
    description:
      'E-commerce de figuras coleccionables con catálogo, carrito de compras y gestión dinámica de productos.',
    tags: ['React', 'Firebase', 'Context API'],
    imageUrl: imgFiguStore,
    demoUrl: 'https://figustoreapp.vercel.app/',
  },
];
