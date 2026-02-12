
import React, { useState } from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate export
import { useNavigate } from 'react-router';
import { 
  ChevronLeft, 
  Phone, 
  User, 
  Heart, 
  Ruler, 
  Droplets, 
  Flag, 
  CircleUser, 
  BadgeCheck, 
  Lock,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const profileInfo = [
    { label: 'Name', value: 'Rakibul Hasan', icon: <User className="w-5 h-5 text-blue-400" /> },
    { label: 'Religion Status', value: 'Unmarried', icon: <Heart className="w-5 h-5 text-pink-400" /> },
    { label: 'Height', value: '5 feet 1 inch', icon: <Ruler className="w-5 h-5 text-emerald-400" /> },
    { label: 'Blood Group', value: 'O+', icon: <Droplets className="w-5 h-5 text-red-400" /> },
    { label: 'Nationality', value: 'Bangladesh', icon: <Flag className="w-5 h-5 text-yellow-400" /> },
    { label: 'Sex', value: 'Male', icon: <CircleUser className="w-5 h-5 text-indigo-400" /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-[#020617] text-slate-100 font-['Hind_Siliguri']"
    >
      {/* Header */}
      <div className="glass sticky top-0 z-50 px-4 py-4 flex items-center justify-between shadow-2xl border-b border-white/5">
        <div className="flex items-center">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all mr-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold tracking-tight">Creator Profile</h2>
        </div>
        <div className="flex items-center space-x-1.5 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Official Profile</span>
        </div>
      </div>

      <main className="flex-1 p-6 flex flex-col items-center">
        {/* Profile Picture - Locked UI */}
        <div className="relative mt-8 mb-8">
          {/* Animated Glow Rings */}
          <div className="absolute -inset-8 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-full blur-md opacity-30"></div>
            
            <div className="relative w-52 h-52 rounded-full overflow-hidden border-[6px] border-[#0f172a] shadow-2xl bg-slate-900">
              {/* Profile Image Source - Tries to load the uploaded file */}
              <img 
                src="./profile.jpg" 
                alt="Rakibul Hasan"
                className={`w-full h-full object-cover transition-all duration-700 ${imgError ? 'hidden' : 'block'}`}
                onError={() => setImgError(true)}
              />
              
              {/* Fallback if file is missing */}
              {imgError && (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500 p-6 text-center">
                   <CircleUser className="w-20 h-20 mb-3 opacity-20" />
                   <span className="text-[9px] uppercase tracking-widest font-black leading-tight">Image not found<br/>(profile.jpg)</span>
                </div>
              )}
              
              {/* Locked Overlay */}
              <div className="absolute inset-0 bg-slate-950/20 flex flex-col items-center justify-center pointer-events-none">
                 <div className="mt-auto mb-8 bg-slate-900/90 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 flex items-center space-x-2 shadow-2xl transform translate-y-2">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Locked Profile</span>
                 </div>
              </div>
            </div>
            
            {/* Verified Icon */}
            <div className="absolute bottom-1 right-1 bg-blue-600 p-2.5 rounded-full border-4 border-[#020617] shadow-2xl">
              <BadgeCheck className="w-8 h-8 text-white fill-current" />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-black text-white tracking-tighter mb-1">
              Rakibul Hasan
            </h1>
            <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] opacity-80">Application Developer</p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {profileInfo.map((info, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-2xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-all group active:scale-95"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                    {info.icon}
                  </div>
                  <span className="text-slate-400 text-sm font-semibold tracking-wide">{info.label}</span>
                </div>
                <span className="text-slate-100 font-bold">{info.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="relative group pt-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <a 
              href="tel:01787313338"
              className="relative flex items-center justify-center space-x-4 w-full bg-[#1e293b] hover:bg-[#334155] text-white py-5 rounded-2xl font-black transition-all shadow-2xl border border-white/10 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 fill-current text-blue-400" />
              <span className="text-2xl tracking-tighter">01787313338</span>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2 py-4 opacity-40">
            <ShieldAlert className="w-4 h-4 text-slate-500" />
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Permanent Identity Verified</span>
          </div>
        </div>
      </main>

      <footer className="p-8 text-center mt-auto">
        <p className="text-slate-600 text-[9px] uppercase tracking-[0.6em] font-black">
          Powered by Silmoon Tech
        </p>
      </footer>
    </motion.div>
  );
};

export default Profile;