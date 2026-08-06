import React from 'react';
import { motion } from 'motion/react';

interface DeskBackgroundProps {
  children: React.ReactNode;
}

export const DeskBackground: React.FC<DeskBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-wood-desk wood-pattern overflow-hidden flex flex-col justify-between select-none">
      {/* Ambient Warm Desk Lighting Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-700/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[600px] h-[500px] bg-zinc-800/20 rounded-full blur-[140px]" />
      
      {/* Subtle Vignette Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)] z-10" />

      {/* Decorative Desk Props (Desktop Viewports) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden xl:block">
        {/* Coffee Mug with Steam (Top Right Desk Area) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute top-12 right-16 flex flex-col items-center"
        >
          {/* Steam animation */}
          <div className="relative w-8 h-10 mb-1">
            <motion.div
              animate={{ y: [-2, -18], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
              className="absolute left-1 bottom-0 w-1.5 h-6 bg-zinc-800/30 rounded-full blur-[2px]"
            />
            <motion.div
              animate={{ y: [-2, -22], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, delay: 0.8, ease: "easeOut" }}
              className="absolute right-2 bottom-0 w-2 h-7 bg-zinc-800/20 rounded-full blur-[2px]"
            />
          </div>
          {/* Ceramic Mug Top View */}
          <div className="relative w-24 h-24 rounded-full bg-zinc-900 border-4 border-stone-700 shadow-2xl flex items-center justify-center">
            {/* Coffee liquid */}
            <div className="w-18 h-18 rounded-full bg-[radial-gradient(ellipse_at_center,#3b2219_0%,#1f110c_100%)] shadow-inner border border-zinc-700/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-indigo-500/30 bg-zinc-900/30" />
            </div>
            {/* Handle */}
            <div className="absolute -right-3 top-6 w-4 h-10 border-4 border-stone-700 rounded-r-xl" />
          </div>
        </motion.div>

        {/* Gold Fountain Pen (Bottom Right Desk Area) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-16 right-20 rotate-[35deg] flex items-center"
        >
          <div className="w-48 h-3.5 bg-gradient-to-r from-neutral-900 via-indigo-900 to-black rounded-full shadow-2xl border border-indigo-500/30 relative flex items-center">
            {/* Gold Clip */}
            <div className="absolute left-6 w-12 h-1 bg-indigo-500 shadow-sm rounded" />
            {/* Gold Nib */}
            <div className="absolute -right-4 w-5 h-3.5 bg-gradient-to-r from-indigo-400 to-indigo-200 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
          </div>
        </motion.div>

        {/* Reading Glasses (Top Left Desk Area) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.75, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="absolute top-16 left-12 -rotate-[15deg] flex items-center space-x-1"
        >
          {/* Left Lens */}
          <div className="w-14 h-11 border-2 border-indigo-600/70 rounded-full bg-zinc-700/5 shadow-lg backdrop-blur-[1px] relative">
            <div className="absolute top-1 left-2 w-4 h-2 bg-white/20 rounded-full blur-[1px]" />
          </div>
          {/* Bridge */}
          <div className="w-4 h-1 border-t-2 border-indigo-600/80 -mt-2" />
          {/* Right Lens */}
          <div className="w-14 h-11 border-2 border-indigo-600/70 rounded-full bg-zinc-700/5 shadow-lg backdrop-blur-[1px] relative">
            <div className="absolute top-1 left-2 w-4 h-2 bg-white/20 rounded-full blur-[1px]" />
          </div>
        </motion.div>

        {/* Small Leather Notebook (Bottom Left Desk Area) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.65, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute bottom-12 left-14 -rotate-[8deg] w-40 h-52 bg-zinc-900 border border-indigo-500/40 rounded-sm shadow-2xl p-2 relative"
        >
          <div className="w-full h-full border border-indigo-700/30 rounded-xs flex flex-col justify-between p-3">
            <div className="w-12 h-0.5 bg-indigo-600/40 mx-auto" />
            <div className="text-[9px] font-sans tracking-widest text-sky-500/50 text-center uppercase">
              NOTES
            </div>
            <div className="w-full space-y-2">
              <div className="w-full h-0.5 bg-zinc-800/40" />
              <div className="w-3/4 h-0.5 bg-zinc-800/40" />
            </div>
          </div>
          {/* Ribbon bookmark */}
          <div className="absolute -bottom-6 left-8 w-3 h-12 bg-indigo-800/80 rounded-b shadow-md" />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 flex-1 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
