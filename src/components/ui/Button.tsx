import { cn } from '@/lib/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.3em] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gold text-espresso hover:bg-gold-light': variant === 'primary',
            'border border-gold/40 text-cream/60 hover:text-cream hover:border-gold bg-transparent': variant === 'secondary',
            'bg-transparent text-gold hover:text-gold-light underline-offset-4 hover:underline tracking-[0.2em]': variant === 'ghost',
            'bg-kyegegwa text-cream hover:bg-kyegegwa/80': variant === 'green',
          },
          {
            'px-6 py-2.5 text-[10px]': size === 'sm',
            'px-8 py-3.5 text-[11px]': size === 'md',
            'px-9 py-4 text-[11px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
export default Button;
