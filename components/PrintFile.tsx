
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Search, Download, Printer, Info, Copy, CheckCircle2, X } from 'lucide-react';
import { printSpecs } from '../data/printSpecs';

const PrintFile: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const highlightId = searchParams.get('id');

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredData = useMemo(() => {
    if (highlightId) {
        return printSpecs.filter(item => item.id === highlightId);
    }
    if (!searchQuery) return printSpecs;
    const q = searchQuery.toLowerCase().trim();
    return printSpecs.filter(item => 
      item.size.toLowerCase().includes(q) || 
      item.category.toLowerCase().includes(q) ||
      item.writingText.toLowerCase().includes(q)
    );
  }, [searchQuery, highlightId]);

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-['Hind_Siliguri']">
      {/* Top Bar */}
      <div className="glass z-50 px-4 py-3 shadow-xl">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
                <button 
                    onClick={() => highlightId ? navigate('/search') : navigate('/')}
                    className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold tracking-wide leading-tight">
                        {highlightId ? 'Detail Process' : 'Print File'}
                    </h2>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Silmoon Digital System</span>
                </div>
            </div>
            {highlightId && (
                <button 
                    onClick={() => navigate('/print')}
                    className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
        
        {!highlightId && (
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input 
                    type="text" 
                    placeholder="Search by size or category..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all"
                />
            </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-auto p-4 md:p-8 bg-[#020617] custom-scrollbar">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
            <p className="text-slate-400 animate-pulse text-xs">Fetching Details...</p>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto space-y-4 pb-20">
            {highlightId && (
                 <div className="mb-4 flex items-center space-x-2 text-purple-400 bg-purple-400/10 p-4 rounded-2xl border border-purple-400/20">
                    <Info className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Viewing Specific Print Specification</span>
                </div>
            )}

            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center space-x-2">
                <Printer className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-semibold text-slate-400">Digital Print Formats</span>
              </div>
              <span className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 tabular-nums">
                {filteredData.length} Found
              </span>
            </div>

            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {filteredData.map((item) => (
                  <div 
                    key={item.id}
                    className={`group relative bg-slate-800/40 border ${item.id === highlightId ? 'border-purple-500/50 ring-1 ring-purple-500/20 shadow-purple-500/10 shadow-2xl scale-[1.02]' : 'border-slate-700/50'} rounded-2xl p-6 hover:bg-slate-800/60 transition-all shadow-lg overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${item.id === highlightId ? 'bg-purple-500 opacity-100' : 'bg-purple-500 opacity-0 group-hover:opacity-100'} transition-opacity`}></div>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-black text-white">{item.size}</span>
                          <span className="text-xs px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase font-black tracking-tighter">
                            {item.category}
                          </span>
                        </div>
                        <button 
                          onClick={() => handleCopy(item.writingText, item.id)}
                          className={`p-3 rounded-xl transition-all ${copiedId === item.id ? 'text-emerald-400 bg-emerald-400/10 scale-110' : 'text-slate-500 hover:bg-white/5 hover:text-slate-300 active:scale-90'}`}
                        >
                          {copiedId === item.id ? <CheckCircle2 className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
                        </button>
                      </div>

                      <div className="bg-slate-950/70 rounded-2xl p-5 border border-white/5 group-hover:border-purple-500/30 transition-all shadow-inner">
                        <p className="text-base font-mono leading-relaxed text-purple-50 text-center tracking-tight break-all">
                          {item.writingText}
                        </p>
                      </div>
                      
                      {item.id === highlightId && (
                          <div className="pt-2 flex justify-end">
                              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Digital Format v1.0 • Locked</span>
                          </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-800/20 rounded-3xl border border-slate-800/50">
                <Info className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                <p className="text-slate-500 text-lg">No Results Found</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Bottom Tool Bar */}
      <div className="glass px-6 py-4 flex items-center justify-between shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)] border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Record Count</span>
          <span className="text-xl font-black text-purple-400 tabular-nums">{filteredData.length} Items</span>
        </div>
        
        <button 
          onClick={() => alert('Catalog ডাউনলোড হচ্ছে...')}
          className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 active:scale-95 text-white px-8 py-3.5 rounded-2xl text-sm font-bold transition-all shadow-xl shadow-purple-900/40 border border-purple-400/20"
        >
          <Download className="w-4 h-4" />
          <span>Catalog</span>
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(139, 92, 246, 0.3); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default PrintFile;
