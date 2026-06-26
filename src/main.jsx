import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Importamos los componentes de las páginas
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound/NotFound.jsx'; // Asegurate de que la ruta coincida con tus carpetas exactas

// Creamos el router con la configuración de nuestras rutas corregida
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Si algo falla dentro del flujo, renderiza nuestro NotFound personalizado directamente
    errorElement: <NotFound />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*', // Captura cualquier sub-ruta incorrecta tipeada en la URL
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);