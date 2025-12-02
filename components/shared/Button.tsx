import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-flocken-olive text-white hover:bg-flocken-accent hover:scale-105 shadow-soft',
    secondary: 'bg-white text-flocken-olive border-2 border-flocken-olive hover:bg-flocken-cream'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}

