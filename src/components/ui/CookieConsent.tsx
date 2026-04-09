'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('povu-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('povu-cookie-consent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 350,
      background: '#131009',
      borderTop: '1px solid rgba(201,145,58,0.18)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    }}>
      <p style={{
        color: 'rgba(240,230,204,0.6)',
        fontSize: '13px',
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        maxWidth: '600px',
      }}>
        We use cookies to enhance your experience. By continuing to browse, you agree to our use of cookies.
      </p>
      <button
        onClick={accept}
        style={{
          background: '#C9913A',
          color: '#0C0906',
          border: 'none',
          padding: '8px 24px',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'background 0.2s ease',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#DFB468'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#C9913A'; }}
      >
        Accept
      </button>
    </div>
  );
}
