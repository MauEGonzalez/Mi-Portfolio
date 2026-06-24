import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  // Reemplaza las X con tu número real (ej: 54911XXXXXXXX) sin espacios ni símbolos
  const whatsappUrl = "https://wa.me/5491137896819?text=Hola%20Mauro,%20vi%20tu%20portfolio%20y%20me%20interesaría%20conversar%20sobre%20un%20proyecto.";

  return (
    <>
      <Navbar />
      <main>
        {/* El componente Outlet renderizará la página que corresponda a la ruta actual */}
        <Outlet />
      </main>

      {/* Botón Flotante de WhatsApp Global */}
      <a 
        href={whatsappUrl} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50%',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '2px 2px 3px #999',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.907h.004c4.368 0 7.926-3.559 7.93-7.93a7.897 7.897 0 0 0-2.327-5.615zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.194-.588-1.378-.654-.185-.066-.32-.099-.455.101-.134.2-.522.654-.64.789-.118.135-.235.149-.437.05-2.007-.994-3.08-1.023-4.23-3.002-.12-.203-.012-.314.09-.415.092-.092.202-.236.302-.354.101-.118.134-.197.202-.33.067-.132.033-.248-.017-.35-.05-.101-.455-1.096-.623-1.5-.165-.407-.332-.351-.455-.351-.119-.006-.256-.008-.393-.008a.782.782 0 0 0-.563.263c-.195.21-.743.726-.743 1.77 0 1.043.759 2.05 1.066 2.463.308.413 1.493 2.282 3.596 3.192.499.217.887.347 1.19.443.5.158.954.135 1.312.083.399-.058 1.194-.488 1.362-1.037.168-.55.168-1.02.118-1.119-.05-.099-.185-.15-.387-.251z"/>
        </svg>
      </a>
    </>
  );
}

export default App;