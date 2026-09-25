import { useEffect, useState } from 'react';
import Seo from '../../components/Seo/Seo';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { SITE, whatsappLink } from '../../data/siteConfig';
import { services } from '../../data/services';
import { trackEvent } from '../../lib/analytics';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', phone: '', service: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // El backend en Render se "duerme" si no recibe visitas.
  // Lo despertamos apenas se abre la página para que el envío sea rápido.
  useEffect(() => {
    fetch(SITE.contactApiBase, { method: 'GET', mode: 'no-cors' }).catch(() => {});
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // El backend recibe name, email y message: sumamos servicio y teléfono dentro del mensaje.
    const extra = [
      form.service && `Servicio: ${form.service}`,
      form.phone && `Teléfono: ${form.phone}`,
    ].filter(Boolean).join('\n');
    const payload = {
      name: form.name,
      email: form.email,
      message: extra ? `${extra}\n\n${form.message}` : form.message,
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch(`${SITE.contactApiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || '¡Gracias! Recibí tu mensaje y te respondo a la brevedad.' });
        setForm(initialForm);
        trackEvent('Lead', { method: 'form', service: form.service || 'sin_especificar' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Hubo un error al enviar el mensaje. Probá por WhatsApp.' });
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setStatus({ type: 'error', message: 'No se pudo enviar el mensaje. Escribime por WhatsApp y te respondo enseguida.' });
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  };

  return (
    <>
      <Seo
        title="Contacto"
        description="Contame tu proyecto y te paso un presupuesto sin cargo. Escribime por WhatsApp o completá el formulario."
        path="/contact"
      />

      <section className={styles.contactSection}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className={styles.eyebrow}>Contacto</span>
            <h1>Hablemos de tu proyecto</h1>
            <p>
              Contame qué necesitás y te respondo con una propuesta a medida. La primera consulta es gratis y sin
              compromiso.
            </p>

            <div className={styles.waCard}>
              <strong>¿Preferís algo más rápido?</strong>
              <span>Escribime por WhatsApp y coordinamos una charla.</span>
              <Button
                href={whatsappLink()}
                variant="whatsapp"
                onClick={() => trackEvent('Contact', { method: 'whatsapp_contact' })}
              >
                <Icon name="whatsapp" size={20} /> Escribir por WhatsApp
              </Button>
            </div>

            <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.ig}>
              <Icon name="instagram" size={20} /> Seguime en Instagram
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre *</label>
                <input type="text" id="name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="phone">WhatsApp (opcional)</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" value={form.phone} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">¿Qué necesitás?</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Elegí una opción</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Otro">Otro / no estoy seguro</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Contame sobre tu proyecto *</label>
              <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} required />
            </div>

            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? 'Enviando… (puede tardar unos segundos)' : 'Enviar mensaje'}
            </button>

            {status.message && (
              <p role="status" className={status.type === 'success' ? styles.successMessage : styles.errorMessage}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
