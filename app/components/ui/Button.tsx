'use client';

import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  icon?: boolean;
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  icon = false,
  className = '' 
}: ButtonProps) {
  
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2";
  
  const variantStyles = {
    primary: "bg-[#00d9ff] text-[#0a192f] hover:bg-[#64ffda] hover:shadow-lg hover:shadow-[#00d9ff]/50",
    outline: "border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && <Mail size={20} />}
      {children}
    </motion.button>
  );
}