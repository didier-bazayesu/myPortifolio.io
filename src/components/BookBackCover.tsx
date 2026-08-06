import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { BookOpen, Github, Linkedin, Mail, Sparkles, RefreshCw } from 'lucide-react';

interface BookBackCoverProps {
  onReopen: () => void;
  onCloseToFront: () => void;
}

export const BookBackCover: React.FC<BookBackCoverProps> = ({ onReopen, onCloseToFront }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-[340px] sm:w-[420px] lg:w-[480px] h-[520px] sm:h-[600px] lg:h-[650px] bg-leather-back rounded-l-2xl rounded-r-md border-l-8 border-b-8 border-zinc-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-8 flex flex-col justify-between select-none overflow-hidden border-gold-embossed text-zinc-100"
    >
      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-indigo-400/80" />
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-400/80" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-400/80" />
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-indigo-400/80" />

      {/* Header */}
      <div className="text-center space-y-1">
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-sky-500/80 font-bold block">
          Epilogue — End of Volume I
        </span>
        <h2 className="text-2xl font-sans-luxury font-bold text-gold-foil">
          {DEVELOPER_INFO.name}
        </h2>
      </div>

      {/* Back Cover Portrait & Quote */}
      <div className="flex flex-col items-center text-center space-y-4 my-2">
        <div className="relative p-1 bg-gradient-to-br from-indigo-400 to-indigo-900 rounded-full shadow-2xl">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-zinc-800">
            <img
              src={DEVELOPER_INFO.backCoverImage}
              alt={DEVELOPER_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Quote */}
        <div className="p-4 bg-zinc-900/80 rounded-xl border border-indigo-600/30 max-w-xs shadow-lg">
          <p className="font-reading text-base italic text-sky-300">
            "{DEVELOPER_INFO.backCoverQuote}"
          </p>
          <span className="block text-right font-sans text-xs font-bold text-sky-500 mt-2">
            — Didier Bazayesu
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-3 pt-2">
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-black border border-indigo-600/40 text-sky-400 transition-all shadow"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-black border border-indigo-600/40 text-sky-400 transition-all shadow"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${DEVELOPER_INFO.email}`}
            className="p-2.5 rounded-lg bg-zinc-900/80 hover:bg-black border border-indigo-600/40 text-sky-400 transition-all shadow"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Action Controls */}
      <div className="space-y-2 text-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={onReopen}
            className="flex-1 py-2 rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-zinc-100 text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-lg border border-indigo-500/40"
          >
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Read Again</span>
          </button>

          <button
            onClick={onCloseToFront}
            className="flex-1 py-2 rounded-lg bg-zinc-950 hover:bg-black border border-indigo-700/40 text-sky-300 text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-lg"
          >
            <RefreshCw className="w-3.5 h-3.5 text-sky-500" />
            <span>Front Cover</span>
          </button>
        </div>

        <p className="text-[10px] font-sans text-sky-500/60 uppercase tracking-widest pt-1">
          © {new Date().getFullYear()} Didier Bazayesu. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
};
