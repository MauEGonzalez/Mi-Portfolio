import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  // Los estados que ya teníamos
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // --- NUEVOS ESTADOS ---
  // 1. Para mostrar 'Enviando...' en el botón
  const [loading, setLoading] = useState(false);
  // 2. Para mostrar mensajes de éxito o error del servidor
  const [status, setStatus] = useState({ type: '', message: '' });

  // 3. Convertimos la función a 'async' para poder usar 'await'
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenimos que la página se recargue

    setLoading(true); // 4. Empezamos la carga
    setStatus({ type: '', message: '' }); // Limpiamos mensajes anteriores

    // 5. La NUEVA URL de nuestro endpoint en el backend de Render
    const backendUrl = 'https://mi-portfolio-backend-702p.onrender.com/api/contact';

    // 6. Los datos que enviaremos, deben coincidir con el Modelo
    const formData = { name, email, message };

    try {
      // 7. Usamos 'fetch' para enviar la petición POST
      const response = await fetch(backendUrl, {
        method: 'POST', // Le decimos que es una petición POST
        headers: {
          'Content-Type': 'application/json', // Le decimos que enviaremos JSON
        },
        body: JSON.stringify(formData), // Convertimos nuestro objeto JS a un string JSON
      });

      // 8. Leemos la respuesta del servidor
      const data = await response.json();

      if (response.ok) {
        // Si el servidor respondió bien (ej: status 201)
        setStatus({ type: 'success', message: data.message });
        // Limpiamos el formulario
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Si el servidor respondió con un error (ej: status 400 o 500)
        setStatus({ type: 'error', message: data.error || 'Hubo un error al enviar el mensaje.' });
      }

    } catch (error) {
      // 9. Si hay un error de red (ej: el servidor backend no está corriendo)
      console.error('Error de conexión:', error);
      setStatus({ type: 'error', message: 'No se pudo conectar al servidor. Inténtalo más tarde.' });
    } finally {
      // 10. Se ejecuta siempre (éxito o error) para reactivar el botón
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.title}>Hablemos</h2>
        <p className={styles.subtitle}>
          ¿Tienes un proyecto en mente o quieres saber más sobre mí?
          <br />
          Completa el formulario y me pondré en contacto.
        </p>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea 
              id="message" 
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            >
            </textarea>
          </div>

          {/* --- CAMBIOS EN EL BOTÓN Y MENSAJES DE ESTADO --- */}
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={loading} // El botón se deshabilita mientras 'loading' sea true
          >
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          
          {/* Mostramos el mensaje de estado si existe */}
          {status.message && (
            <p className={status.type === 'success' ? styles.successMessage : styles.errorMessage}>
              {status.message}
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;