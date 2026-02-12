
import React, { useState, useEffect, useMemo } from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate and useSearchParams exports
import { useNavigate, useSearchParams } from 'react-router';
import { ChevronLeft, Bookmark, BookmarkCheck, Search, Download, Info, Filter, X } from 'lucide-react';
import { pipeSpecs } from '../data/pipeSpecs';

const PipeFile: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const highlightId = searchParams.get('id');
  
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [sizeQuery, setSizeQuery] = useState('');
  const [categoryQuery, setCategoryQuery] = useState('');
  const [lengthQuery, setLengthQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('pipe_bookmarks') || '[]');
    setIsBookmarked(bookmarks.some((b: any) => b.fileName === 'Pipe file.pdf'));
    
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const toggleBookmark = () => {
    let bookmarks = JSON.parse(localStorage.getItem('pipe_bookmarks') || '[]');
    if (isBookmarked) {
      bookmarks = bookmarks.filter((b: any) => b.fileName !== 'Pipe file.pdf');
    } else {
      bookmarks.push({
        id: Date.now().toString(),
        fileName: 'Pipe file.pdf',
        timestamp: Date.now()
      });
    }
    localStorage.setItem('pipe_bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  const filteredData = useMemo(() => {
    // Priority 1: If highlightId exists and no search query, show that specific item
    if (highlightId && !sizeQuery && !categoryQuery && !lengthQuery) {
      return pipeSpecs.filter(item => item.srNo === highlightId);
    }

    // Priority 2: Filter by all three inputs
    return pipeSpecs.filter(item => {
      const matchesSize = !sizeQuery || item.size.toLowerCase().includes(sizeQuery.toLowerCase().trim());
      const matchesCategory = !categoryQuery || item.category.toLowerCase().includes(categoryQuery.toLowerCase().trim());
      const matchesLength = !lengthQuery || item.length.toLowerCase().includes(lengthQuery.toLowerCase().trim());
      return matchesSize && matchesCategory && matchesLength;
    });
  }, [sizeQuery, categoryQuery, lengthQuery, highlightId]);

  const resetFilters = () => {
    setSizeQuery('');
    setCategoryQuery('');
    setLengthQuery('');
    if (highlightId) navigate('/pipe');
  };

  const hasActiveFilters = sizeQuery || categoryQuery || lengthQuery;

  return (
    <div className="flex flex-col h-screen bg-[#020617] text-slate-100 overflow-hidden font-['Hind_Siliguri']">
      {/* Top Navigation Bar */}
      <div className="glass z-50 px-4 py-3 flex items-center justify-between shadow-lg border-b border-white/5">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => highlightId ? navigate('/search') : navigate('/')}
            className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-wide leading-tight">
              Pipe Database
            </h2>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Silmoon Tech System</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition-all ${isBookmarked ? 'text-yellow-400 bg-yellow-400/20' : 'text-slate-400 hover:bg-white/10'}`}
          >
            {isBookmarked ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Triple Input Search Area */}
      <div className="bg-slate-900/90 border-b border-slate-700/50 p-4 shadow-2xl relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {/* Size Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Size (উদাঃ 1.5)" 
              value={sizeQuery}
              onChange={(e) => setSizeQuery(e.target.value)}
              className="block w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600 shadow-inner"
            />
          </div>

          {/* Category Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Category (উদাঃ SWR)" 
              value={categoryQuery}
              onChange={(e) => setCategoryQuery(e.target.value)}
              className="block w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-slate-600 shadow-inner"
            />
          </div>

          {/* Length Input */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Info className="w-4 h-4 text-slate-500 group-focus-within:text-purple-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Length (উদাঃ 10')" 
              value={lengthQuery}
              onChange={(e) => setLengthQuery(e.target.value)}
              className="block w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-slate-600 shadow-inner"
            />
          </div>
        </div>
        
        {/* Reset Actions */}
        {(hasActiveFilters || highlightId) && (
          <div className="flex items-center justify-between mt-3 max-w-6xl mx-auto px-1">
            <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Filter Active</span>
            </div>
            <button 
              onClick={resetFilters}
              className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 hover:text-white flex items-center space-x-1 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 transition-all"
            >
              <X className="w-3 h-3" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-auto p-4 md:p-6 bg-[#020617] custom-scrollbar">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-30">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-slate-400 animate-pulse text-[10px] font-black uppercase tracking-[0.3em]">Syncing Records...</p>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto">
            <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden mb-24">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[950px]">
                  <thead className="bg-slate-800/80 sticky top-0 z-10 backdrop-blur-md">
                    <tr>
                      <th className="sticky left-0 z-30 p-4 text-[10px] font-black uppercase tracking-wider text-slate-100 bg-slate-800 border-b border-white/5 border-r border-white/5 w-[110px]">Category</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5 w-20">Sr. No</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5 w-24">Size</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Colour</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Diameter</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Thickness</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Length</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Weight</th>
                      <th className="p-4 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-white/5">Pin OD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredData.length > 0 ? filteredData.map((item, idx) => (
                      <tr 
                        key={`${item.srNo}-${idx}`} 
                        className={`hover:bg-blue-500/10 transition-colors group ${item.srNo === highlightId ? 'bg-emerald-500/20' : idx % 2 === 0 ? 'bg-slate-900/30' : 'bg-transparent'}`}
                      >
                        <td className={`sticky left-0 z-20 p-4 text-[11px] font-black border-r border-white/5 transition-colors ${item.srNo === highlightId ? 'bg-emerald-900/90' : idx % 2 === 0 ? 'bg-slate-900' : 'bg-[#0f172a]'} group-hover:bg-slate-800`}>
                            <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-emerald-400 block truncate max-w-[90px] text-center shadow-inner">
                                {item.category}
                            </span>
                        </td>
                        <td className="p-4 text-[11px] font-mono text-slate-500">{item.srNo}</td>
                        <td className="p-4 text-xs font-black text-white truncate">{item.size}</td>
                        <td className="p-4 text-[11px]">{item.colour || "—"}</td>
                        <td className="p-4 text-[11px] font-mono text-slate-400">{item.diameter || "—"}</td>
                        <td className="p-4 text-[11px] font-mono text-slate-400">{item.thickness || "—"}</td>
                        <td className="p-4 text-[11px]">{item.length}</td>
                        <td className="p-4 text-xs font-black text-blue-400 italic tabular-nums">{item.weight}</td>
                        <td className="p-4 text-[11px] text-slate-500 font-mono">{item.pinOd || "—"}</td>
                      </tr>
                    )) : (
                        <tr>
                            <td colSpan={9} className="p-32 text-center">
                                <div className="p-8 bg-slate-900/50 rounded-full border border-white/5 inline-block mb-4 shadow-2xl">
                                  <Search className="w-12 h-12 text-slate-800" />
                                </div>
                                <p className="text-slate-400 font-black uppercase tracking-widest text-sm">কোনো তথ্য খুঁজে পাওয়া যায়নি</p>
                                <button 
                                  onClick={resetFilters}
                                  className="mt-6 text-blue-400 border border-blue-400/20 bg-blue-400/5 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-400/10 transition-all"
                                >
                                  ফিল্টার রিসেট করুন
                                </button>
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Status Bar */}
      <div className="glass px-6 py-5 flex items-center justify-between shadow-[0_-15px_30px_-5px_rgba(0,0,0,0.6)] border-t border-white/5 z-50">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">Filtered Count</span>
          <span className="text-2xl font-black text-emerald-400 tabular-nums tracking-tighter">{filteredData.length} <span className="text-sm text-slate-500 uppercase">Items</span></span>
        </div>
        
        <button 
          onClick={() => navigate('/full-report')}
          className="flex items-center space-x-2 bg-gradient-to-br from-blue-600 to-indigo-700 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all shadow-2xl shadow-blue-900/50 border border-blue-400/30"
        >
          <Download className="w-4 h-4" />
          <span>Full Report</span>
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 20px; border: 2px solid transparent; background-clip: content-box; }
        .sticky.left-0::after {
          content: ""; position: absolute; top: 0; right: -12px; bottom: 0; width: 12px;
          background: linear-gradient(to right, rgba(0,0,0,0.3), transparent); pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default PipeFile;