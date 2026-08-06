import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionType, BookState, Project } from '../types';
import { BookCover } from './BookCover';
import { BookBackCover } from './BookBackCover';
import { PageSpread } from './PageSpread';
import { ProjectDetailModal } from './ProjectDetailModal';
import { paperAudio } from '../utils/audio';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';

interface Book3DProps {
  bookState: BookState;
  currentSection: SectionType;
  onSetBookState: (state: BookState) => void;
  onSetCurrentSection: (section: SectionType) => void;
}

export const Book3D: React.FC<Book3DProps> = ({
  bookState,
  currentSection,
  onSetBookState,
  onSetCurrentSection,
}) => {
  const [spreadIndex, setSpreadIndex] = useState(0); // 0 to 7
  const [turningDirection, setTurningDirection] = useState<'next' | 'prev' | null>(null);
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  // Map SectionType to spreadIndex
  const sectionToSpreadMap: Record<SectionType, number> = {
    cover: 0,
    contents: 0,
    about: 1,
    skills: 2,
    experience: 3,
    projects: 4,
    education: 6,
    contact: 7,
    backCover: 7,
  };

  // Synchronize spread index whenever currentSection changes from top navbar
  useEffect(() => {
    if (currentSection in sectionToSpreadMap) {
      const targetSpread = sectionToSpreadMap[currentSection];
      if (targetSpread !== spreadIndex && bookState === 'open') {
        paperAudio.playFlipSound();
        setSpreadIndex(targetSpread);
      }
    }
  }, [currentSection]);

  // Handle open cover
  const handleOpenCover = () => {
    paperAudio.playCoverOpenSound();
    onSetBookState('opening');
    setTimeout(() => {
      onSetBookState('open');
      setSpreadIndex(0);
      onSetCurrentSection('contents');
    }, 600);
  };

  // Handle page turn next
  const handleNextPage = () => {
    if (spreadIndex < 7) {
      paperAudio.playFlipSound();
      setTurningDirection('next');
      setTimeout(() => {
        const nextIdx = spreadIndex + 1;
        setSpreadIndex(nextIdx);
        setTurningDirection(null);
        // Sync current section name
        if (nextIdx === 1) onSetCurrentSection('about');
        else if (nextIdx === 2) onSetCurrentSection('skills');
        else if (nextIdx === 3) onSetCurrentSection('experience');
        else if (nextIdx === 4 || nextIdx === 5) onSetCurrentSection('projects');
        else if (nextIdx === 6) onSetCurrentSection('education');
        else if (nextIdx === 7) onSetCurrentSection('contact');
      }, 300);
    } else {
      // Go to back cover
      paperAudio.playCoverOpenSound();
      onSetBookState('back');
      onSetCurrentSection('backCover');
    }
  };

  // Handle page turn prev
  const handlePrevPage = () => {
    if (spreadIndex > 0) {
      paperAudio.playFlipSound();
      setTurningDirection('prev');
      setTimeout(() => {
        const prevIdx = spreadIndex - 1;
        setSpreadIndex(prevIdx);
        setTurningDirection(null);
        if (prevIdx === 0) onSetCurrentSection('contents');
        else if (prevIdx === 1) onSetCurrentSection('about');
        else if (prevIdx === 2) onSetCurrentSection('skills');
        else if (prevIdx === 3) onSetCurrentSection('experience');
        else if (prevIdx === 4 || prevIdx === 5) onSetCurrentSection('projects');
        else if (prevIdx === 6) onSetCurrentSection('education');
      }, 300);
    } else {
      // Close back to cover
      paperAudio.playCoverOpenSound();
      onSetBookState('closed');
      onSetCurrentSection('cover');
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (bookState !== 'open') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookState, spreadIndex]);

  return (
    <div className="relative w-full flex-1 flex items-center justify-center p-4 my-auto">
      {/* Front Cover Closed View */}
      {bookState === 'closed' && (
        <BookCover onOpen={handleOpenCover} />
      )}

      {/* Opening Animation State */}
      {bookState === 'opening' && (
        <div className="perspective-2000 w-[340px] sm:w-[420px] lg:w-[480px] h-[520px] sm:h-[600px] lg:h-[650px] relative">
          <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full h-full preserve-3d origin-left"
          >
            <BookCover onOpen={() => {}} />
          </motion.div>
        </div>
      )}

      {/* Open 3D Hardcover Book Spread */}
      {bookState === 'open' && (
        <div className="relative w-full max-w-5xl h-[560px] sm:h-[620px] lg:h-[680px] flex flex-col items-center justify-center">
          {/* Layered Paper Thickness Stack (Bottom & Side depth effect) */}
          <div className="relative w-full h-full rounded-2xl bg-zinc-950 border-4 border-zinc-800 p-2 lg:p-3 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] flex items-center justify-center">
            {/* Edge Stack Gold Leaf Layers */}
            <div className="absolute -bottom-2 left-4 right-4 h-3 bg-gradient-to-b from-indigo-200 via-indigo-400 to-indigo-900 rounded-b-lg border-t border-indigo-600/50 shadow-inner" />
            <div className="absolute -bottom-3 left-6 right-6 h-2 bg-gradient-to-b from-indigo-300 to-indigo-950 rounded-b-lg opacity-80" />

            {/* Inner Spread Canvas */}
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={spreadIndex}
                  initial={{ opacity: 0, scale: 0.98, rotateY: turningDirection === 'next' ? -5 : 5 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.98, rotateY: turningDirection === 'next' ? 5 : -5 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <PageSpread
                    spreadIndex={spreadIndex}
                    onNavigateSection={(sec) => {
                      onSetCurrentSection(sec);
                      if (sec in sectionToSpreadMap) {
                        setSpreadIndex(sectionToSpreadMap[sec]);
                      }
                    }}
                    onInspectProject={(p) => setInspectedProject(p)}
                    onPrevPage={handlePrevPage}
                    onNextPage={handleNextPage}
                    canPrev={true}
                    canNext={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Page Jump Slider / Indicator Bar (Bottom of Book) */}
          <div className="mt-4 flex items-center space-x-3 bg-zinc-950/80 px-4 py-2 rounded-full border border-indigo-500/40 shadow-xl backdrop-blur-md">
            <button
              onClick={handlePrevPage}
              className="p-1 rounded bg-zinc-800/40 hover:bg-zinc-800 text-sky-300 transition-all text-xs"
              title="Previous Spread"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-1.5">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    paperAudio.playFlipSound();
                    setSpreadIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    spreadIndex === idx
                      ? 'bg-indigo-500 scale-125 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                      : 'bg-zinc-800/60 hover:bg-indigo-700'
                  }`}
                  title={`Jump to Spread ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              className="p-1 rounded bg-zinc-800/40 hover:bg-zinc-800 text-sky-300 transition-all text-xs"
              title="Next Spread"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Back Cover State */}
      {bookState === 'back' && (
        <BookBackCover
          onReopen={() => {
            paperAudio.playCoverOpenSound();
            onSetBookState('open');
            setSpreadIndex(0);
            onSetCurrentSection('contents');
          }}
          onCloseToFront={() => {
            paperAudio.playCoverOpenSound();
            onSetBookState('closed');
            onSetCurrentSection('cover');
          }}
        />
      )}

      {/* Project Detail Deep Dive Modal */}
      <ProjectDetailModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </div>
  );
};
