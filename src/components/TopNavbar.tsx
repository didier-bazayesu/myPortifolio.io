import React, { useState } from 'react';
import { Volume2, VolumeX, FileDown, BookOpen, Menu, X, Sparkles } from 'lucide-react';
import { SectionType, BookState } from '../types';
import { paperAudio } from '../utils/audio';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface TopNavbarProps {
  currentSection: SectionType;
  bookState: BookState;
  onNavigateSection: (section: SectionType) => void;
  onToggleBookState: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const TopNavbar: React.FC<TopNavbarProps> = ({
  currentSection,
  bookState,
  onNavigateSection,
  onToggleBookState,
  soundEnabled,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionType; label: string }[] = [
    { id: 'contents', label: 'Contents' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (section: SectionType) => {
    onNavigateSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full px-4 lg:px-8 py-3.5 bg-[#120b08]/80 backdrop-blur-md border-b border-[#6366f1]/30 text-zinc-200 flex items-center justify-between shadow-xl">
      {/* Brand & Book State Status */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onToggleBookState}
          className="group flex items-center space-x-2.5 text-left focus:outline-none"
          title={bookState === 'closed' ? 'Open Book' : 'Close Book'}
        >
          <div className="w-9 h-9 rounded-md bg-[#2a1e14] border border-[#6366f1]/40 flex items-center justify-center text-[#6366f1] shadow-md group-hover:border-[#6366f1] group-hover:scale-105 transition-all">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-sans-luxury text-sm lg:text-base font-bold tracking-wider text-gold-foil">
              {DEVELOPER_INFO.name}
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-[#6366f1] font-sans font-medium">
              {bookState === 'closed' ? 'Hardcover Portfolio (Closed)' : `Section: ${currentSection}`}
            </span>
          </div>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-1 bg-zinc-950/60 p-1 rounded-full border border-[#6366f1]/30">
        {navItems.map((item) => {
          const isActive = currentSection === item.id && bookState === 'open';
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider uppercase transition-all duration-300 ${
                isActive
                  ? 'bg-[#6366f1] text-zinc-50 font-bold shadow-md'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-900/50'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Sound, Resume, Book Cover Trigger & Mobile Menu */}
      <div className="flex items-center space-x-2 lg:space-x-3">
        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-2 rounded-md border transition-all ${
            soundEnabled
              ? 'bg-zinc-950 border-[#6366f1]/50 text-[#6366f1] shadow-xs'
              : 'bg-zinc-950/60 border-zinc-700 text-zinc-500'
          }`}
          title={soundEnabled ? 'Mute Paper Audio' : 'Enable Paper Audio'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        {/* Download Resume Button */}
        <a
          href={DEVELOPER_INFO.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[#6366f1] hover:bg-[#b08c48] border border-[#6366f1] text-zinc-50 text-xs font-sans font-bold tracking-wider uppercase shadow-md transition-all"
        >
          <FileDown className="w-3.5 h-3.5 text-zinc-50" />
          <span>Resume</span>
        </a>

        {/* Book State Toggle Pill */}
        <button
          onClick={onToggleBookState}
          className="px-3 py-1.5 rounded-md bg-zinc-950 border border-[#6366f1]/40 hover:border-[#6366f1] text-[#6366f1] text-xs font-sans tracking-wider flex items-center space-x-1.5 transition-all shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#6366f1] animate-pulse" />
          <span>{bookState === 'closed' ? 'Open Book' : 'Close Book'}</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md bg-zinc-950 border border-[#6366f1]/40 text-[#6366f1]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-indigo-500/40 p-4 shadow-2xl flex flex-col space-y-2 lg:hidden z-50">
          <div className="text-[10px] font-sans uppercase tracking-widest text-sky-500/70 mb-1 px-2">
            Book Sections
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-sans text-sm tracking-wider uppercase transition-all ${
                currentSection === item.id && bookState === 'open'
                  ? 'bg-zinc-800/60 text-sky-300 border border-indigo-600/40 font-bold'
                  : 'text-zinc-300 hover:bg-zinc-900/40'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-700/30 flex items-center justify-between">
            <a
              href={DEVELOPER_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2 rounded-lg bg-indigo-900 text-zinc-100 text-xs uppercase font-sans tracking-widest flex items-center justify-center space-x-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
