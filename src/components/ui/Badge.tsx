import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'green' | 'popular';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-sans font-medium text-[9px] tracking-[0.3em] uppercase',
        {
          'border border-gold/30 text-gold px-3 py-1.5': variant === 'gold',
          'border border-kyegegwa text-kyegegwa px-3 py-1.5': variant === 'green',
          'bg-gold text-espresso px-2.5 py-1': variant === 'popular',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
