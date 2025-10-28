import React from 'react'; // <--- LÍNEA AGREGADA
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* El componente Outlet renderizará la página que corresponda a la ruta actual */}
        <Outlet />
      </main>
    </>
  );
}

export default App;