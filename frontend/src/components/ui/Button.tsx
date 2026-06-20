import { ReactNode, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses: Record<string, string> = {
  primary:
    'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500',
  secondary:
    'bg-slate-700 text-white hover:bg-slate-800 focus:ring-slate-500',
  outline:
    'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-amber-500',
};

export const Button = ({
  children,
  href = '#',
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};