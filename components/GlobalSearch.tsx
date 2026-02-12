
import React, { useState, useMemo } from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate export
import { useNavigate } from 'react-router';
import { 
  ChevronLeft, 
  Search, 
  Settings, 
  Folder, 
  Printer, 
  ArrowRight,
  Info,
  X,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { pipeSpecs } from '../data/pipeSpecs';
import { printSpecs } from '../data/printSpecs';
import { mixerSpecs } from '../data/mixerSpecs';

const GlobalSearch: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const suggestions = ["1.5\"", "Thread Pipe", "WASA", "SWR", "Green Mixer", "Class-D"];

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return { pipes: [], prints: [], mixers: [] };

    // Advanced search logic for pipes
    const pipes = pipeSpecs.filter(p => 
      p.size.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      (p.colour && p.colour.toLowerCase().includes(q)) ||
      (p.diameter && p.diameter.toLowerCase().includes(q)) ||
      (p.thickness && p.thickness.toLowerCase().includes(q)) ||
      p.weight.toLowerCase().includes(q)
    ).slice(0, 8);

    const prints = printSpecs.filter(p => 
      p.size.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.writingText.toLowerCase().includes(q)
    ).slice(0, 8);

    const mixers = mixerSpecs.flatMap(group => 
      group.items.filter(item => 
        item.category.toLowerCase().includes(q) || 
        group.type.toLowerCase().includes(q)
      ).map(item => ({ ...item, groupType: group.type }))
    ).slice(0, 8);

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
      <div className="glass sticky top-0 z-50 p-4 pb-6 shadow-2xl border-b border-white/5">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold tracking-tight">সার্বজনীন অনুসন্ধান (Global)</h2>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-slate-900/80 border border-white/10 rounded-2xl overflow-hidden focus-within:border-blue-500/50 transition-all shadow-inner">
              <Search className="w-5 h-5 ml-4 text-slate-500" />
              <input 
                autoFocus
                type="text" 
                placeholder="সাইজ, ক্যাটাগরি, ওজন বা টেক্সট..." 
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

          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-1">
             <Zap className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
             {suggestions.map(s => (
               <button 
                key={s} 
                onClick={() => setQuery(s)}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors whitespace-nowrap"
               >
                 {s}
               </button>
             ))}
          </div>
        </div>
      </div>

      {/* Results Area */}
      <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
        {!query ? (
          <div className="h-full flex flex-col items-center justify-center opacity-40 py-20 text-center">
            <div className="p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 mb-6">
               <Search className="w-16 h-16 text-slate-800" />
            </div>
            <p className="text-xl font-black uppercase tracking-widest">স্মার্ট সার্চ</p>
            <p className="text-xs mt-2 opacity-60">যেকোনো টেকনিক্যাল ডাটা নিমেষেই খুঁজে পান</p>
          </div>
        ) : totalResults === 0 ? (
          <div className="h-full flex flex-col items-center justify-center py-20 text-center">
            <div className="p-8 bg-slate-900/50 rounded-full mb-4 border border-white/5">
                <Info className="w-12 h-12 text-slate-700" />
            </div>
            <p className="text-slate-400 font-bold">দুঃখিত, কোনো তথ্য পাওয়া যায়নি!</p>
            <p className="text-[10px] uppercase mt-2 tracking-widest text-slate-600">চেষ্টা করুন: "1.5" অথবা "Class-D"</p>
          </div>
        ) : (
          <div className="space-y-10 pb-24">
            {/* Summary Tag */}
            <div className="px-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full border border-white/5">
                    মোট {totalResults} টি ফলাফল পাওয়া গেছে
                </span>
            </div>

            {/* Pipe Results */}
            {searchResults.pipes.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2 text-emerald-400">
                        <Folder className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Pipe Database</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {searchResults.pipes.map((pipe, i) => (
                    <motion.button 
                      key={`p-${i}`} 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => navigate(`/pipe?id=${pipe.srNo}`)}
                      className="glass w-full p-4 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between group text-left shadow-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-black text-slate-100 text-lg tracking-tight">{pipe.size} - {pipe.category}</h4>
                        <div className="flex items-center space-x-3 mt-1 text-[10px] uppercase font-bold text-slate-500">
                            <span>{pipe.weight}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                            <span>{pipe.thickness}mm</span>
                        </div>
                      </div>
                      <div className="bg-emerald-500/10 p-2 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-400">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* Mixer Results */}
            {searchResults.mixers.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2 text-blue-400">
                        <Settings className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Mixer Formula</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {searchResults.mixers.map((mixer: any, i) => (
                    <motion.button 
                      key={`m-${i}`} 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => navigate(`/mixer?cat=${mixer.category}&type=${mixer.groupType}`)}
                      className="glass w-full p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all flex items-center justify-between group text-left shadow-lg"
                    >
                      <div>
                        <h4 className="font-black text-slate-100 text-lg tracking-tight">{mixer.category}</h4>
                        <p className="text-[10px] text-blue-400/60 uppercase font-black tracking-widest mt-0.5">{mixer.groupType}</p>
                      </div>
                      <div className="bg-blue-500/10 p-2 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all text-blue-400">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* Print Results */}
            {searchResults.prints.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-2 text-purple-400">
                        <Printer className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Digital Printing</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {searchResults.prints.map((print, i) => (
                    <motion.button 
                      key={`pr-${i}`} 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      onClick={() => navigate(`/print?id=${print.id}`)}
                      className="glass w-full p-4 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all flex items-center justify-between group text-left shadow-lg"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <h4 className="font-black text-slate-100 text-lg tracking-tight">{print.size} - {print.category}</h4>
                        <p className="text-[10px] text-slate-500 truncate uppercase font-bold mt-0.5 tracking-tight">Format ID: {print.id}</p>
                      </div>
                      <div className="bg-purple-500/10 p-2 rounded-xl group-hover:bg-purple-500 group-hover:text-white transition-all text-purple-400">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </motion.div>
  );
};

export default GlobalSearch;