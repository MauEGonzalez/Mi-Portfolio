// Meta Pixel. Para activarlo creá un archivo .env con:
// VITE_META_PIXEL_ID=tu_id_de_pixel
// (y cargá la misma variable en Vercel > Settings > Environment Variables)
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export function initAnalytics() {
  if (!PIXEL_ID || typeof window === 'undefined' || window.fbq) return;

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

  window.fbq('init', PIXEL_ID);
}

export function trackPageView() {
  window.fbq?.('track', 'PageView');
}

// Eventos estándar útiles para campañas: 'Contact' (click a WhatsApp) y 'Lead' (formulario enviado)
export function trackEvent(name, params = {}) {
  window.fbq?.('track', name, params);
}
