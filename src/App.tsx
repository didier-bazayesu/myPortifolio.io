import React, { useState } from 'react';
import { SectionType, BookState } from './types';
import { DeskBackground } from './components/DeskBackground';
import { TopNavbar } from './components/TopNavbar';
import { Book3D } from './components/Book3D';
import { MobilePortfolio } from './components/MobilePortfolio';
import { paperAudio } from './utils/audio';
export default function App():React.FC{
  const [bookState, setBookState] = useState<BookState>('closed');
  const [currentSection, setCurrentSection] = useState<SectionType>('cover');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleToggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    paperAudio.enabled = nextState;
  };

  const handleNavigateSection = (section: SectionType) => {
    setCurrentSection(section);
    if (bookState === 'closed') {
      paperAudio.playCoverOpenSound();
      setBookState('opening');
      setTimeout(() => {
        setBookState('open');
      }, 500);
    }
  };

  const handleToggleBookState = () => {
    if (bookState === 'closed') {
      paperAudio.playCoverOpenSound();
      setBookState('opening');
      setTimeout(() => {
        setBookState('open');
        setCurrentSection('contents');
      }, 500);
    } else {
      paperAudio.playCoverOpenSound();
      setBookState('closed');
      setCurrentSection('cover');
    }
  };

  return (
    <DeskBackground>
      {/* Top Fixed Navbar */}
      <TopNavbar
        currentSection={currentSection}
        bookState={bookState}
        onNavigateSection={handleNavigateSection}
        onToggleBookState={handleToggleBookState}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Portfolio Canvas Area */}
      <main className="flex-1 flex flex-col justify-center items-center w-full py-2">
        {/* Desktop / Laptop Viewport 3D Book */}
        <div className="hidden md:flex w-full flex-1 items-center justify-center">
          <Book3D
            bookState={bookState}
            currentSection={currentSection}
            onSetBookState={setBookState}
            onSetCurrentSection={setCurrentSection}
          />
        </div>

        {/* Mobile Viewport Responsive Journal View */}
        <div className="md:hidden w-full flex-1">
          <MobilePortfolio
            currentSection={currentSection === 'cover' ? 'about' : currentSection}
            onNavigateSection={(sec) => {
              setCurrentSection(sec);
              if (bookState !== 'open') setBookState('open');
            }}
          />
        </div>
      </main>

      {/* Footer copyright strip */}
      <footer className="w-full py-2 px-4 text-center text-[11px] font-sans tracking-widest text-sky-400/40 uppercase bg-black/40 backdrop-blur-xs border-t border-zinc-700/20">
        Interactive 3D cover Portfolio • Didier Bazayesu 
      </footer>
    </DeskBackground>
  );
}
