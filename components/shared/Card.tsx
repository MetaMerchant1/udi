import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white p-4 sm:p-5 md:p-6 border border-gray-100',
        'shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08),0_2px_8px_-2px_rgba(0,0,0,0.04)]',
        hover && 'transition-all duration-300 hover:shadow-[0_16px_48px_-8px_rgba(37,99,235,0.12),0_4px_16px_-4px_rgba(37,99,235,0.08)] hover:-translate-y-1 hover:border-primary-100',
        className
      )}
    >
      {children}
    </div>
  );
}
