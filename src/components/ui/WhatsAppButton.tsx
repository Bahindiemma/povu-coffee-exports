'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256773165989?text=Hello%20POVU%20Coffee!%20I%27d%20like%20to%20enquire%20about..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 300,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(37,211,102,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.3)';
      }}
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '28px', color: '#fff' }} />
    </a>
  );
}
