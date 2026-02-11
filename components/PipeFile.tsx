
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
    
    const timer = setTimeout(() => setLoading(false), 800);
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
    // If we have a highlight ID from search, show ONLY that item as details
    if (highlightId) {
      return pipeSpecs.filter(item => item.srNo === highlightId);
    }

    return pipeSpecs.filter(item => {
      const matchesSize = !sizeQuery || item.size.toLowerCase().includes(sizeQuery.toLowerCase());
      const matchesCategory = !categoryQuery || item.category.toLowerCase().includes(categoryQuery.toLowerCase());
      const matchesLength = !lengthQuery || item.length.toLowerCase().includes(lengthQuery.toLowerCase());
      return matchesSize && matchesCategory && matchesLength;
    });
  }, [sizeQuery, categoryQuery, lengthQuery, highlightId]);

  const resetFilters = () => {
    setSizeQuery('');
    setCategoryQuery('');
    setLengthQuery('');
    if (highlightId) navigate('/pipe'); // Clear the highlight from URL
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-['Hind_Siliguri']">
      {/* Top Navigation Bar */}
      <div className="glass z-50 px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => highlightId ? navigate('/search') : navigate('/')}
            className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-wide leading-tight">
              {highlightId ? 'Item Details' : 'Pipe File'}
            </h2>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Silmoon Specifications</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {highlightId && (
            <button 
              onClick={resetFilters}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              title="Show All"
            >
              <X className="w-5 h-5" />
            </button>
          )}
          <button 
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition-all ${isBookmarked ? 'text-yellow-400 bg-yellow-400/20' : 'text-slate-400 hover:bg-white/10'}`}
          >
            {isBookmarked ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {!highlightId && (
        <div className="bg-slate-800/80 border-b border-slate-700 p-4 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Size (উদাঃ 1/2&quot;)" 
                value={sizeQuery}
                onChange={(e) => setSizeQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-200"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Category" 
                value={categoryQuery}
                onChange={(e) => setCategoryQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-200"
              />
            </div>
            <div className="relative">
              <Info className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Length" 
                value={lengthQuery}
                onChange={(e) => setLengthQuery(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-700/50 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 text-slate-200"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-auto p-4 md:p-6 bg-[#0f172a] custom-scrollbar">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-slate-400 animate-pulse text-xs uppercase tracking-widest">Loading Data...</p>
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto">
            {highlightId && (
                <div className="mb-4 flex items-center space-x-2 text-emerald-400 bg-emerald-400/10 p-3 rounded-xl border border-emerald-400/20">
                    <Info className="w-4 h-4" />
                    <span className="text-xs font-bold">Showing details for selected search result</span>
                </div>
            )}
            
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead className="bg-slate-700/50 sticky top-0 z-10">
                    <tr>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Sr. No</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Size</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Category</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Colour</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Diameter</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Thickness</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Length</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Weight</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-700">Pin OD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50 text-slate-300">
                    {filteredData.length > 0 ? filteredData.map((item, idx) => (
                      <tr 
                        key={`${item.srNo}-${idx}`} 
                        className={`hover:bg-blue-500/10 transition-colors group ${item.srNo === highlightId ? 'bg-emerald-500/20' : idx % 2 === 0 ? 'bg-slate-800/30' : 'bg-transparent'}`}
                      >
                        <td className="p-4 text-sm font-mono text-slate-500">{item.srNo}</td>
                        <td className="p-4 text-sm font-bold text-slate-100">{item.size}</td>
                        <td className="p-4 text-sm font-medium">
                            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300">
                                {item.category}
                            </span>
                        </td>
                        <td className="p-4 text-sm">{item.colour || "—"}</td>
                        <td className="p-4 text-sm font-mono">{item.diameter || "—"}</td>
                        <td className="p-4 text-sm font-mono">{item.thickness || "—"}</td>
                        <td className="p-4 text-sm">{item.length}</td>
                        <td className="p-4 text-sm font-bold text-blue-400">{item.weight}</td>
                        <td className="p-4 text-sm text-slate-500">{item.pinOd || "—"}</td>
                      </tr>
                    )) : (
                        <tr>
                            <td colSpan={9} className="p-20 text-center">
                                <Info className="w-16 h-16 text-slate-700 mx-auto mb-4" />
                                <p className="text-slate-500 text-lg">কোনো তথ্য পাওয়া যায়নি</p>
                                <button 
                                  onClick={resetFilters}
                                  className="mt-4 text-blue-400 hover:underline text-sm font-semibold"
                                >
                                  সব ডাটা দেখান
                                </button>
                            </td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[10px] text-slate-600 text-center py-6 italic">
                * All measurements are based on official Silmoon Pipe specifications.
            </p>
          </div>
        )}
      </main>

      {/* Bottom Status Bar */}
      <div className="glass px-6 py-4 md:px-12 flex items-center justify-between shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.5)] border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Total Result</span>
          <span className="text-xl font-black text-emerald-400 tabular-nums">{filteredData.length} Items</span>
        </div>
        
        <button 
          onClick={() => alert('PDF ডাউনলোড শুরু হচ্ছে...')}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 active:scale-95 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-xl shadow-blue-900/40 border border-blue-400/20"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download PDF</span>
        </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(51, 65, 85, 0.8); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(71, 85, 105, 1); }
      `}</style>
    </div>
  );
};

export default PipeFile;
