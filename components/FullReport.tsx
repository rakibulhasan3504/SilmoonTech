
import React from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing useNavigate export
import { useNavigate } from 'react-router';
import { ChevronLeft, Printer, Download, Share2 } from 'lucide-react';
import { pipeSpecs } from '../data/pipeSpecs';
import { mixerSpecs } from '../data/mixerSpecs';
import { printSpecs } from '../data/printSpecs';

const FullReport: React.FC = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans print:p-0">
      {/* Action Bar (Hidden on Print) */}
      <div className="sticky top-0 z-50 bg-slate-900 text-white px-4 py-4 flex items-center justify-between shadow-xl print:hidden">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-bold">HTML Data Report</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto p-8 md:p-12 space-y-16">
        {/* Report Header */}
        <header className="text-center border-b-4 border-slate-900 pb-8">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Silmoon Pipe & Fittings Ltd.</h1>
          <h2 className="text-xl font-bold text-slate-600 uppercase tracking-[0.3em] mb-4">Official Data & Specifications Sheet</h2>
          <div className="flex justify-center space-x-8 text-sm font-bold text-slate-500 uppercase">
            <span>Date: {new Date().toLocaleDateString('bn-BD')}</span>
            <span>Version: 2.5.0</span>
            <span>Creator: Rakibul Hasan</span>
          </div>
        </header>

        {/* Section 1: Pipe Specs */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
            <h3 className="text-2xl font-black uppercase tracking-tight">1. Pipe Specifications (পাইপ স্পেসিফিকেশন)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-2 border-slate-900">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-900">
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase w-24">Category</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase w-10">Sr.</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase w-16">Size</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase">Diameter</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase">Thickness</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-[10px] uppercase">Weight</th>
                  <th className="p-2 font-bold text-[10px] uppercase">Length</th>
                </tr>
              </thead>
              <tbody>
                {pipeSpecs.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-300 hover:bg-slate-50">
                    <td className="p-2 border-r border-slate-300 text-[10px] font-bold bg-slate-50 truncate w-24">{item.category}</td>
                    <td className="p-2 border-r border-slate-300 text-[10px] font-mono w-10">{item.srNo}</td>
                    <td className="p-2 border-r border-slate-300 text-[11px] font-bold w-16">{item.size}</td>
                    <td className="p-2 border-r border-slate-300 text-[10px] font-mono">{item.diameter}</td>
                    <td className="p-2 border-r border-slate-300 text-[10px] font-mono">{item.thickness}</td>
                    <td className="p-2 border-r border-slate-300 text-[11px] font-bold text-blue-700">{item.weight}</td>
                    <td className="p-2 text-[11px]">{item.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Mixer Specs */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-black uppercase tracking-tight">2. HDPE Mixer Formulas (মিক্সার ফর্মুলা)</h3>
          </div>
          <div className="space-y-10">
            {mixerSpecs.map((group, gIdx) => (
              <div key={gIdx}>
                <h4 className="text-lg font-bold mb-3 text-slate-700 uppercase">{group.type}</h4>
                <table className="w-full text-left border-collapse border-2 border-slate-900">
                  <thead>
                    <tr className="bg-slate-100 border-b-2 border-slate-900">
                      <th className="p-3 border-r border-slate-300 font-bold text-xs uppercase w-28">Category</th>
                      <th className="p-3 border-r border-slate-300 font-bold text-xs uppercase">Layer 1</th>
                      <th className="p-3 border-r border-slate-300 font-bold text-xs uppercase">Layer 2</th>
                      <th className="p-3 border-r border-slate-300 font-bold text-xs uppercase">Layer 3</th>
                      <th className="p-3 font-bold text-xs uppercase">Layer 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item, iIdx) => (
                      <tr key={iIdx} className="border-b border-slate-300">
                        <td className="p-3 border-r border-slate-300 text-sm font-bold bg-slate-50 w-28">{item.category}</td>
                        <td className="p-3 border-r border-slate-300 text-sm">{item.layer1}</td>
                        <td className="p-3 border-r border-slate-300 text-sm">{item.layer2}</td>
                        <td className="p-3 border-r border-slate-300 text-sm">{item.layer3}</td>
                        <td className="p-3 text-sm">{item.layer4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Print Formats */}
        <section className="page-break-before">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2 h-8 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-black uppercase tracking-tight">3. Digital Print Formats (প্রিন্ট ফরম্যাট)</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {printSpecs.map((item, idx) => (
              <div key={idx} className="p-4 border-2 border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">{item.size} - {item.category}</span>
                  <span className="text-[10px] text-slate-400 font-mono">ID: {item.id}</span>
                </div>
                <div className="bg-slate-50 p-3 rounded font-mono text-sm border border-slate-200 break-all leading-relaxed">
                  {item.writingText}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Report Footer */}
        <footer className="mt-20 pt-10 border-t-2 border-slate-200 text-center">
          <div className="flex justify-around mb-12">
            <div className="flex flex-col items-center">
              <div className="w-40 border-b border-slate-900 mb-2"></div>
              <span className="text-xs font-bold uppercase">Prepared By</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-40 border-b border-slate-900 mb-2"></div>
              <span className="text-xs font-bold uppercase">Quality Assurance</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-40 border-b border-slate-900 mb-2"></div>
              <span className="text-xs font-bold uppercase">Authorized Signature</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.5em] font-black">
            Generated via Rakibul Hasan Pro App • Silmoon Tech System
          </p>
        </footer>
      </main>

      <style>{`
        @media print {
          .page-break-before { page-break-before: always; }
          body { background: white !important; }
          .min-h-screen { height: auto !important; min-h: 0 !important; }
        }
        table { page-break-inside: auto; }
        tr { page-break-inside: avoid; page-break-after: auto; }
        thead { display: table-header-group; }
        tfoot { display: table-footer-group; }
      `}</style>
    </div>
  );
};

export default FullReport;