
import React from 'react';
// Fix: Change react-router-dom import to react-router to resolve missing Routes, Route, and useLocation exports
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';

// Components
import Home from './components/Home';
import PipeFile from './components/PipeFile';
import PrintFile from './components/PrintFile';
import MixerFile from './components/MixerFile';
import Profile from './components/Profile';
import GlobalSearch from './components/GlobalSearch';
import FullReport from './components/FullReport';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-950 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/pipe" element={<PipeFile />} />
          <Route path="/print" element={<PrintFile />} />
          <Route path="/mixer" element={<MixerFile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<GlobalSearch />} />
          <Route path="/full-report" element={<FullReport />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;