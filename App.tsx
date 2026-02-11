
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Home from './components/Home';
import PipeFile from './components/PipeFile';
import PrintFile from './components/PrintFile';
import MixerFile from './components/MixerFile';
import Profile from './components/Profile';
import GlobalSearch from './components/GlobalSearch';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-950 overflow-x-hidden">
      {/* Dynamic Content Only - Restoring previous clean look */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pipe" element={<PipeFile />} />
          <Route path="/print" element={<PrintFile />} />
          <Route path="/mixer" element={<MixerFile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<GlobalSearch />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
