import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '12px',
      color: 'rgba(240,230,204,0.3)',
      fontFamily: 'Roboto, sans-serif',
      marginBottom: '10px',
    }}>
      <Link href="/" style={{ color: 'rgba(240,230,204,0.3)', transition: 'color 0.2s' }}>
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'rgba(201,145,58,0.3)' }}>/</span>
          {item.href ? (
            <Link href={item.href} style={{ color: 'rgba(240,230,204,0.3)', transition: 'color 0.2s' }}>
              {item.label}
            </Link>
          ) : (
            <span style={{ color: 'rgba(240,230,204,0.5)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
