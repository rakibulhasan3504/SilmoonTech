
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardProps } from '../types';
import { motion } from 'framer-motion';

interface EnhancedCardProps extends CardProps {
  variant?: 'full' | 'grid';
}

const Card: React.FC<EnhancedCardProps> = ({ title, icon, path, delay = 0, variant = 'grid' }) => {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(path)}
      className={`group relative flex flex-col items-center justify-center rounded-[2.2rem] text-center overflow-hidden border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5 ${
        variant === 'full' ? 'p-8 min-h-[140px]' : 'p-6 min-h-[160px]'
      }`}
    >
      {/* Interactive Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Icon with Soft Glow Container */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <div className={`mb-4 p-4 rounded-[1.5rem] bg-slate-950/80 border border-white/5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-xl`}>
          {icon}
        </div>
        <span className="text-[11px] font-black text-slate-200 uppercase tracking-widest leading-tight px-2">
          {title}
        </span>
      </div>
      
      {/* Decorative dot */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
    </motion.button>
  );
};

export default Card;
