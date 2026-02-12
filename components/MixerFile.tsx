
import React, { useState, useEffect, useMemo } from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate and useSearchParams exports
import { useNavigate, useSearchParams } from 'react-router';
import { ChevronLeft, Info, X } from 'lucide-react';
import { mixerSpecs } from '../data/mixerSpecs';

const MixerFile: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterCat = searchParams.get('cat');
  const filterType = searchParams.get('type');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSpecs = useMemo(() => {
    if (!filterCat || !filterType) return mixerSpecs;

    return mixerSpecs.filter(group => group.type === filterType).map(group => ({
      ...group,
      items: group.items.filter(item => item.category === filterCat)
    }));
  }, [filterCat, filterType]);

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden font-['Hind_Siliguri']">
      {/* Top Bar */}
      <div className="glass z-50 px-4 py-4 shadow-xl border-b border-white/5">
        <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
            <div className="flex items-center space-x-3">
                <button 
                    onClick={() => (filterCat ? navigate('/search') : navigate('/'))}
                    className="p-2 rounded-full hover:bg-white/10 active:scale-90 transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold tracking-wide leading-tight">
                        {filterCat ? 'Detail Mixer' : 'HDPE Mixer'}
                    </h2>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Official Formula Sheet</span>
                </div>
            </div>
            {filterCat && (
                <button 
                    onClick={() => navigate('/mixer')}
                    className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white transition-all"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-auto p-4 md:p-8 bg-[#020617] custom-scrollbar">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
            <p className="text-slate-400 animate-pulse text-xs uppercase tracking-widest">Loading Mixer Data...</p>
          </div>
        ) : (
          <div className="w-full max-w-5xl mx-auto space-y-10 pb-10">
            {filterCat && (
                <div className="flex items-center space-x-3 text-blue-400 bg-blue-400/10 p-4 rounded-2xl border border-blue-400/20">
                    <Info className="w-5 h-5" />
                    <div>
                        <span className="text-sm font-black uppercase block tracking-wider">Viewing Specific Component Detail</span>
                        <p className="text-[10px] text-blue-300 opacity-70">Filtered based on your global search result</p>
                    </div>
                </div>
            )}

            {filteredSpecs.map((group, groupIdx) => (
              group.items.length > 0 && (
                <div key={groupIdx} className="space-y-4">
                  <div className="flex items-center space-x-3 px-2">
                    <div className={`w-3 h-8 rounded-full ${group.type.includes('Green') ? 'bg-emerald-500' : 'bg-slate-400'} shadow-lg`}></div>
                    <h3 className="text-xl font-black tracking-tight">{group.type}</h3>
                  </div>

                  <div className="bg-slate-800/40 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="overflow-x-auto custom-scrollbar">
                      <table className="w-full text-left border-separate border-spacing-0 min-w-[500px]">
                        <thead>
                          <tr className="bg-slate-800/90 backdrop-blur-md text-slate-500">
                            <th className="sticky left-0 z-30 p-4 pl-6 text-[10px] font-black uppercase tracking-widest bg-slate-800 border-b border-white/5 border-r border-white/5 min-w-[100px]">
                              Category
                            </th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest border-b border-white/5">Layer 1</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest border-b border-white/5">Layer 2</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest border-b border-white/5">Layer 3</th>
                            <th className="p-4 text-xs font-black uppercase tracking-widest border-b border-white/5">Layer 4</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {group.items.map((item, idx) => (
                            <tr key={idx} className={`hover:bg-white/5 transition-colors group ${filterCat === item.category ? 'bg-blue-500/10' : ''}`}>
                              <td className="sticky left-0 z-20 p-4 pl-6 text-xs font-black text-slate-100 bg-slate-900 border-r border-white/5 group-hover:bg-slate-800/80 transition-colors">
                                {item.category}
                              </td>
                              <td className={`p-4 text-sm font-bold ${item.layer1 === '0' ? 'text-slate-700' : 'text-blue-400'}`}>{item.layer1}</td>
                              <td className={`p-4 text-sm font-bold ${item.layer2 === '0' ? 'text-slate-700' : 'text-blue-400'}`}>{item.layer2}</td>
                              <td className={`p-4 text-sm font-bold ${item.layer3 === '0' ? 'text-slate-700' : 'text-blue-400'}`}>{item.layer3}</td>
                              <td className={`p-4 text-sm font-bold ${item.layer4 === '0' ? 'text-slate-700' : 'text-blue-400'}`}>{item.layer4}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )
            ))}
            
            <div className="pt-8 text-center">
              <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-black opacity-50">
                Authorized Access Only • Silmoon Data Sheet
              </p>
            </div>
          </div>
        )}
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 6px; width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.5); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(59, 130, 246, 0.2); border-radius: 10px; }
        .sticky.left-0.border-r::after {
          content: ""; position: absolute; top: 0; right: -8px; bottom: 0; width: 8px;
          background: linear-gradient(to right, rgba(0,0,0,0.15), transparent); pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default MixerFile;