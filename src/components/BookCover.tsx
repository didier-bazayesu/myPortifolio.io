import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { Sparkles, BookOpen, Compass } from 'lucide-react';

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpen }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
      className="relative cursor-pointer w-[340px] sm:w-[420px] lg:w-[480px] h-[520px] sm:h-[600px] lg:h-[650px] bg-leather-dark rounded-r-2xl rounded-l-md border-r-8 border-b-8 border-zinc-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-8 flex flex-col justify-between select-none overflow-hidden group border-gold-embossed"
    >
      {/* Gold foil corner ornaments */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-indigo-400/80" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-400/80" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-400/80" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-indigo-400/80" />

      {/* Book Spine Simulation (Left Edge) */}
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black via-stone-900 to-indigo-950/40 border-r border-indigo-500/30 flex flex-col items-center justify-between py-8">
        <div className="w-1.5 h-12 bg-indigo-600/40 rounded-full" />
        <div className="rotate-90 text-[10px] font-sans tracking-[0.4em] text-sky-500/80 uppercase font-bold whitespace-nowrap">
          DIDIER BAZAYESU • PORTFOLIO
        </div>
        <div className="w-1.5 h-12 bg-indigo-600/40 rounded-full" />
      </div>

      {/* Main Cover Content */}
      <div className="pl-6 flex flex-col items-center text-center space-y-4">
        {/* Header Crest */}
        <div className="flex items-center space-x-2 text-sky-500/80 text-[11px] font-sans uppercase tracking-[0.3em]">
          <Compass className="w-4 h-4 text-sky-500" />
          <span>Me!</span>
          <Compass className="w-4 h-4 text-sky-500" />
        </div>

        <div className="relative my-2 p-1 bg-gradient-to-br from-indigo-300 via-indigo-600 to-indigo-900 rounded-full shadow-2xl">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-zinc-700">
            <img
              src={DEVELOPER_INFO.coverImage}
              alt={DEVELOPER_INFO.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans-luxury font-extrabold text-gold-foil tracking-wider leading-tight">
            {DEVELOPER_INFO.name}
          </h1>
         
        </div>
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent my-1" />

      </div>

      {/* Bottom Open Prompt Button */}
      <div className="pl-6 flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="px-5 py-2.5 rounded-full bg-zinc-900/90 border border-indigo-400/50 text-sky-300 text-xs font-sans uppercase tracking-widest flex items-center space-x-2 shadow-2xl group-hover:border-zinc-600 group-hover:text-zinc-100 transition-all"
        >
          <BookOpen className="w-4 h-4 text-sky-500" />
          <span>Click Anywhere to Open</span>
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};
