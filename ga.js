// Initialize dataLayer
window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }

// --- Consent Mode default (deny until user accepts) ---
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});

// Standard GA setup
gtag('js', new Date());
gtag('config', 'G-3SB290CFLX', { anonymize_ip: true });