import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = false, 
  onClick,
  type = 'button',
  disabled = false 
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white focus:ring-amber-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const className = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses}`;
  
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        {icon && <ArrowRight size={20} className="ml-2" />}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={className}
    >
      {children}
      {icon && <ArrowRight size={20} className="ml-2" />}
    </button>
  );
}