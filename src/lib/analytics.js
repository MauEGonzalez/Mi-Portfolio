// Meta Pixel del portfolio (portfolio comercial "Mauro González" en Meta).
// El ID de un Pixel es público (se ve en el código de cualquier web), por eso queda
// como valor por defecto. Se puede reemplazar con VITE_META_PIXEL_ID en Vercel.
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1815708116250454';

let initialized = false;

export function initAnalytics() {
  if (initialized || !PIXEL_ID || typeof window === 'undefined') return;

  // Carga el script oficial de Meta solo si todavía no existe fbq
  // (algunas extensiones del navegador ya definen window.fbq).
  if (!window.fbq) {
    /* eslint-disable */
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
  }

  // Siempre inicializamos nuestro Pixel, antes de cualquier evento.
  window.fbq('init', PIXEL_ID);
  initialized = true;
}

export function trackPageView() {
  if (!initialized) initAnalytics();
  if (initialized) window.fbq('track', 'PageView');
}

// Eventos estándar útiles para campañas: 'Contact' (click a WhatsApp) y 'Lead' (formulario enviado)
export function trackEvent(name, params = {}) {
  if (!initialized) initAnalytics();
  if (initialized) window.fbq('track', name, params);
}
