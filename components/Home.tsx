
import React from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate export
import { useNavigate } from 'react-router';
import { Settings, Folder, Printer, Search, Bell, User, LayoutGrid, FileText } from 'lucide-react';
import Card from './Card';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 px-5 py-8 max-w-lg mx-auto w-full flex flex-col"
    >
      {/* App Header */}
      <header className="w-full mb-10 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rakibul" 
              alt="Profile" 
              className="relative w-14 h-14 rounded-2xl border border-white/10 bg-slate-900 object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-black text-white leading-none tracking-tight">রাকিবুল হাসান</h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">প্রো ড্যাশবোর্ড</p>
          </div>
        </div>
        <button className="p-3 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
      </header>

      {/* Primary Search Card - Full Width */}
      <div className="mb-6">
        <Card 
          title="সার্বজনীন অনুসন্ধান (Global Search)" 
          icon={<Search className="w-8 h-8 text-yellow-400" />} 
          path="/search" 
          delay={0.1}
          variant="full"
        />
      </div>

      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center space-x-2">
            <LayoutGrid size={14} className="text-blue-500" />
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">সিস্টেম ফিচারস</h3>
        </div>
        <button 
          onClick={() => navigate('/full-report')}
          className="flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FileText size={12} />
          <span className="text-[9px] font-black uppercase tracking-widest">Full HTML Report</span>
        </button>
      </div>

      {/* Feature Grid - 4 Equal Cards */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card 
          title="Pipe Specs" 
          icon={<Folder className="w-8 h-8 text-emerald-400" />} 
          path="/pipe" 
          delay={0.2}
        />
        
        <Card 
          title="HDPE Mixer" 
          icon={<Settings className="w-8 h-8 text-blue-400" />} 
          path="/mixer" 
          delay={0.3}
        />
        
        <Card 
          title="Print Format" 
          icon={<Printer className="w-8 h-8 text-purple-400" />} 
          path="/print" 
          delay={0.4}
        />

        <Card 
          title="Creator Profile" 
          icon={<User className="w-8 h-8 text-indigo-400" />} 
          path="/profile" 
          delay={0.5}
        />
      </div>

      <footer className="mt-auto pt-16 pb-4 text-center">
        <p className="text-slate-700 text-[9px] uppercase tracking-[0.6em] font-black">
          SILMOON TECH • V2.5
        </p>
      </footer>
    </motion.div>
  );
};

export default Home;
