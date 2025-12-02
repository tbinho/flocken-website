import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({ children, className = '', elevated = false }: CardProps) {
  return (
    <div className={`bg-flocken-sand rounded-2xl p-6 ${
      elevated ? 'shadow-elevated' : 'shadow-card'
    } ${className}`}>
      {children}
    </div>
  );
}

