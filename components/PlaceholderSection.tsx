
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface Props {
  title: string;
  icon: string;
}

const PlaceholderSection: React.FC<Props> = ({ title, icon }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-slate-950 text-slate-100">
      <div className="glass px-4 py-4 flex items-center space-x-4 shadow-xl">
        <button 
          onClick={() => navigate('/')}
          className="p-2 rounded-full hover:bg-white/10 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="text-6xl mb-6 animate-bounce">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">এই বিভাগটি শীঘ্রই আসছে</h3>
        <p className="text-slate-400 max-w-xs">
          রাকিবুল হাসান অ্যাপের এই ফিচারটি বর্তমানে ডেভেলপমেন্ট পর্যায়ে রয়েছে।
        </p>
        <button 
          onClick={() => navigate('/')}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl font-bold hover:opacity-90 transition-opacity"
        >
          হোম পেজে ফিরে যান
        </button>
      </div>
    </div>
  );
};

export default PlaceholderSection;
