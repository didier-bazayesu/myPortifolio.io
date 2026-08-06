import React from 'react';
import { SectionType, Project } from '../types';
import { ContentsPage } from './pages/ContentsPage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';

interface PageSpreadProps {
  spreadIndex: number; // 0 to 7
  onNavigateSection: (section: SectionType) => void;
  onInspectProject: (project: Project) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export const PageSpread: React.FC<PageSpreadProps> = ({
  spreadIndex,
  onNavigateSection,
  onInspectProject,
  onPrevPage,
  onNextPage,
  canPrev,
  canNext,
}) => {
  const renderLeftPage = () => {
    switch (spreadIndex) {
      case 0:
        return (
          <div className="h-full flex flex-col justify-between p-8 text-zinc-100 bg-paper">
            <div>
              <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-2">
                Inner Hardcover Page
              </div>
              <div className="p-6 bg-zinc-800/40 rounded-2xl border border-indigo-500/20 text-center my-12 space-y-3">
                <Bookmark className="w-8 h-8 text-indigo-400 mx-auto" />
                <h3 className="font-sans-luxury text-xl font-bold text-zinc-100">
                  DIDIER BAZAYESU
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-zinc-300">
                  Full Stack Portfolio • 2026 Edition
                </p>
              </div>
            </div>
            <div className="text-center font-sans italic text-xs text-zinc-400">
              Turn page right to explore contents →
            </div>
          </div>
        );
      case 1:
        return <AboutPage side="left" />;
      case 2:
        return <SkillsPage side="left" />;
      case 3:
        return <ExperiencePage side="left" />;
      case 4:
        return <ProjectsPage pageIndex={0} onInspectProject={onInspectProject} />;
      case 5:
        return <ProjectsPage pageIndex={2} onInspectProject={onInspectProject} />;
      case 6:
        return <EducationPage side="left" />;
      case 7:
        return <ContactPage side="left" />;
      default:
        return null;
    }
  };

  const renderRightPage = () => {
    switch (spreadIndex) {
      case 0:
        return <ContentsPage onSelectSection={onNavigateSection} />;
      case 1:
        return <AboutPage side="right" />;
      case 2:
        return <SkillsPage side="right" />;
      case 3:
        return <ExperiencePage side="right" />;
      case 4:
        return <ProjectsPage pageIndex={1} onInspectProject={onInspectProject} />;
      case 5:
        return <ProjectsPage pageIndex={3} onInspectProject={onInspectProject} />;
      case 6:
        return <EducationPage side="right" />;
      case 7:
        return <ContactPage side="right" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Left Page (Even Numbered) */}
      <div className="relative w-1/2 h-full bg-paper rounded-l-xl border-l-4 border-t-2 border-b-2 border-zinc-700/30 paper-inner-shadow-left overflow-hidden">
        {renderLeftPage()}

        {/* Previous Page Hotspot / Button */}
        {canPrev && (
          <button
            onClick={onPrevPage}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/10 hover:bg-zinc-800/30 text-zinc-100 transition-all z-30 group"
            title="Previous Page (Flip Left)"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Book Center Binding Seam & Shadow */}
      <div className="relative z-20 w-8 h-full book-spine-shadow shrink-0 border-x border-zinc-800/20" />

      {/* Right Page (Odd Numbered) */}
      <div className="relative w-1/2 h-full bg-paper rounded-r-xl border-r-4 border-t-2 border-b-2 border-zinc-700/30 paper-inner-shadow-right overflow-hidden">
        {/* Navigation Ribbon Bookmark */}
        <div className="absolute -top-2 right-12 w-7 h-14 bg-[#6366f1] shadow-md flex items-end justify-center pb-2 z-20 pointer-events-none">
          <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[8px] border-b-[#18181b] absolute bottom-0"></div>
        </div>

        {renderRightPage()}

        {/* Next Page Hotspot / Button */}
        {canNext && (
          <button
            onClick={onNextPage}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/10 hover:bg-zinc-800/30 text-zinc-100 transition-all z-30 group"
            title="Next Page (Flip Right)"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
};
