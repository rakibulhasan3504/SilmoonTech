
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Search, 
  Settings, 
  Folder, 
  Printer, 
  ArrowRight,
  Info,
  X
} from 'lucide-react';
import { motion } from 'framer-motion';
import { pipeSpecs } from '../data/pipeSpecs';
import { printSpecs } from '../data/printSpecs';
import { mixerSpecs } from '../data/mixerSpecs';

const GlobalSearch: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { pipes: [], prints: [], mixers: [] };

    const pipes = pipeSpecs.filter(p => 
      p.size.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      (p.colour && p.colour.toLowerCase().includes(q))
    ).slice(0, 5);

    const prints = printSpecs.filter(p => 
      p.size.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.writingText.toLowerCase().includes(q)
    ).slice(0, 5);

    const mixers = mixerSpecs.flatMap(group => 
      group.items.filter(item => 
        item.category.toLowerCase().includes(q) || 
        group.type.toLowerCase().includes(q)
      ).map(item => ({ ...item, groupType: group.type }))
    ).slice(0, 5);

    return { pipes, prints, mixers };
  }, [query]);

  const totalResults = searchResults.pipes.length + searchResults.prints.length + searchResults.mixers.length;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-[#020617] text-slate-100 font-['Hind_Siliguri']"
    >
      {/* Header & Search Input */}
      <div className="glass sticky top-0 z-50 p-4 pb-6 shadow-2xl">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold tracking-tight">সার্বজনীন অনুসন্ধান (Search)</h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden focus-within:border-blue-500/50 transition-all shadow-inner">
              <Search className="w-5 h-5 ml-4 text-slate-500" />
              <input 
                autoFocus
                type="text" 
                placeholder="সাইজ, ক্যাটাগরি বা যেকোনো কিছু খুঁজুন..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full py-4 px-4 bg-transparent outline-none text-lg font-medium placeholder:text-slate-600"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="p-2 mr-2 hover:bg-white/10 rounded-full text-slate-400"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        {!query ? (
          <div className="h-full flex flex-col items-center justify-center opacity-40 py-20 text-center">
            <div className="p-6 bg-slate-900/50 rounded-full border border-white/5 mb-6">
               <Search className="w-12 h-12 text-slate-700" />
            </div>
            <p className="text-lg font-bold">খোঁজা শুরু করুন...</p>
            <p className="text-sm">সব তথ্য এখন আপনার হাতের মুঠোয়</p>
          </div>
        ) : totalResults === 0 ? (
          <div className="h-full flex flex-col items-center justify-center py-20">
            <Info className="w-12 h-12 mb-4 text-slate-700" />
            <p className="text-slate-500">কোনো তথ্য পাওয়া যায়নি</p>
          </div>
        ) : (
          <div className="space-y-8 pb-24">
            {/* Pipe Results */}
            {searchResults.pipes.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center space-x-2 text-emerald-400 px-2">
                    <Folder className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Pipe Results</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {searchResults.pipes.map((pipe, i) => (
                    <motion.button 
                      key={`p-${i}`} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => navigate(`/pipe?id=${pipe.srNo}`)}
                      className="glass w-full p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between group text-left"
                    >
                      <div>
                        <h4 className="font-bold text-slate-100">{pipe.size} - {pipe.category}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Weight: {pipe.weight} • Click for details</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-emerald-400 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* Mixer Results */}
            {searchResults.mixers.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center space-x-2 text-blue-400 px-2">
                    <Settings className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Mixer Results</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {searchResults.mixers.map((mixer: any, i) => (
                    <motion.button 
                      key={`m-${i}`} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => navigate(`/mixer?cat=${mixer.category}&type=${mixer.groupType}`)}
                      className="glass w-full p-4 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between group text-left"
                    >
                      <div>
                        <h4 className="font-bold text-slate-100">{mixer.category}</h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-tighter">{mixer.groupType} • Click for details</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-blue-400 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* Print Results */}
            {searchResults.prints.length > 0 && (
              <section className="space-y-3">
                <div className="flex items-center space-x-2 text-purple-400 px-2">
                    <Printer className="w-4 h-4" />
                    <span className="text-xs font-black uppercase tracking-widest">Print Results</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {searchResults.prints.map((print, i) => (
                    <motion.button 
                      key={`pr-${i}`} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      onClick={() => navigate(`/print?id=${print.id}`)}
                      className="glass w-full p-4 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between group text-left"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <h4 className="font-bold text-slate-100">{print.size} - {print.category}</h4>
                        <p className="text-[10px] text-slate-500 truncate uppercase tracking-tighter">Click for detailed writing format</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-purple-400 transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <footer className="p-8 text-center mt-auto opacity-30">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black">
          SILMOON SMART SEARCH SYSTEM
        </p>
      </footer>
    </motion.div>
  );
};

export default GlobalSearch;
