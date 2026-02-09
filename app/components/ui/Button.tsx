// app/components/ui/Button.tsx
import React from 'react';
import { Mail } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  icon = false,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-sm font-medium transition-all duration-300 flex items-center gap-3';
  
  const variantStyles = {
    primary: 'bg-[#14b8a6] hover:bg-[#0d9488] text-white',
    secondary: 'bg-transparent border border-white/20 hover:border-[#14b8a6] text-white',
  };

  const disabledStyles = disabled 
    ? 'opacity-50 cursor-not-allowed hover:bg-[#14b8a6]' 
    : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {icon && <Mail className="w-5 h-5" />}
      {children}
    </button>
  );
}