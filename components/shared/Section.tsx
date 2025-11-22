import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  id?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  fullWidth = false,
  id
}: SectionProps) {
  const content = fullWidth ? children : <Container className={containerClassName}>{children}</Container>;

  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', className)}>
      {content}
    </section>
  );
}
