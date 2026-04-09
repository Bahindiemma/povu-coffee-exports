export default function Loading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0C0906',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '48px',
          height: '48px',
          border: '2px solid rgba(201,145,58,0.15)',
          borderTopColor: '#C9913A',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
          margin: '0 auto 20px',
        }} />
        <p style={{
          color: 'rgba(240,230,204,0.4)',
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontFamily: 'Roboto, sans-serif',
        }}>
          Loading...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
