import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95';

    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.5)] hover:-translate-y-0.5',
      secondary: 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 hover:from-gray-100 hover:to-gray-200 focus:ring-gray-500 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 border border-gray-200',
      outline: 'bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 shadow-[0_8px_24px_-4px_rgba(37,99,235,0.2)] hover:shadow-[0_12px_32px_-4px_rgba(37,99,235,0.3)] hover:-translate-y-0.5',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
