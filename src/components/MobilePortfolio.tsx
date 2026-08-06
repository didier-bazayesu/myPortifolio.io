import React, { useState } from 'react';
import { SectionType, Project } from '../types';
import { DEVELOPER_INFO } from '../data/portfolioData';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectDetailModal } from './ProjectDetailModal';
import { BookOpen, FileDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface MobilePortfolioProps {
  currentSection: SectionType;
  onNavigateSection: (section: SectionType) => void;
}

export const MobilePortfolio: React.FC<MobilePortfolioProps> = ({
  currentSection,
  onNavigateSection,
}) => {
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const sections: { id: SectionType; title: string }[] = [
    { id: 'about', title: 'About Didier' },
    { id: 'skills', title: 'Skills & Tech' },
    { id: 'experience', title: 'Experience' },
    { id: 'projects', title: 'Projects' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6 text-zinc-100 pb-12">
      {/* Mobile Hardcover Hero Header */}
      <div className="bg-leather-dark p-6 rounded-2xl border-2 border-indigo-600/50 shadow-2xl text-center space-y-3 text-zinc-100">
        <div className="w-20 h-20 rounded-full border-2 border-indigo-400 overflow-hidden mx-auto shadow-xl">
          <img
            src={DEVELOPER_INFO.coverImage}
            alt={DEVELOPER_INFO.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-sans-luxury font-extrabold text-gold-foil">
            {DEVELOPER_INFO.name}
          </h1>
          <p className="text-xs font-sans uppercase tracking-widest text-sky-400">
            {DEVELOPER_INFO.title}
          </p>
        </div>
        <p className="font-reading text-xs italic text-sky-300">
          "{DEVELOPER_INFO.tagline}"
        </p>

        {/* Quick Social & CV Bar */}
        <div className="pt-2 flex items-center justify-center space-x-2">
          <a
            href={DEVELOPER_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-indigo-900 text-zinc-100 text-xs font-sans uppercase tracking-wider flex items-center space-x-1"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-400" />
            <span>Resume</span>
          </a>
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-zinc-950 text-sky-300"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={DEVELOPER_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-zinc-950 text-sky-300"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile Section Nav Tabs */}
      <div className="flex overflow-x-auto gap-2 p-1.5 bg-zinc-900/60 backdrop-blur-md rounded-xl border border-indigo-500/40 no-scrollbar">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => onNavigateSection(sec.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-sans whitespace-nowrap uppercase tracking-wider transition-all ${
              currentSection === sec.id
                ? 'bg-indigo-900 text-zinc-100 font-bold border border-indigo-500/50 shadow'
                : 'text-sky-400/80 hover:bg-zinc-800/30'
            }`}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {/* Render Active Section Content in Paper Journal Cards */}
      <div className="bg-paper rounded-2xl border-2 border-zinc-700/30 shadow-2xl min-h-[500px] overflow-hidden">
        {currentSection === 'about' && (
          <div className="divide-y divide-amber-900/20">
            <AboutPage side="left" />
            <AboutPage side="right" />
          </div>
        )}

        {currentSection === 'skills' && (
          <div className="divide-y divide-amber-900/20">
            <SkillsPage side="left" />
            <SkillsPage side="right" />
          </div>
        )}

        {currentSection === 'experience' && (
          <div className="divide-y divide-amber-900/20">
            <ExperiencePage side="left" />
            <ExperiencePage side="right" />
          </div>
        )}

        {currentSection === 'projects' && (
          <div className="divide-y divide-amber-900/20 space-y-4">
            <ProjectsPage pageIndex={0} onInspectProject={(p) => setInspectedProject(p)} />
            <ProjectsPage pageIndex={1} onInspectProject={(p) => setInspectedProject(p)} />
            <ProjectsPage pageIndex={2} onInspectProject={(p) => setInspectedProject(p)} />
            <ProjectsPage pageIndex={3} onInspectProject={(p) => setInspectedProject(p)} />
          </div>
        )}

        {currentSection === 'education' && (
          <div className="divide-y divide-amber-900/20">
            <EducationPage side="left" />
            <EducationPage side="right" />
          </div>
        )}

        {currentSection === 'contact' && (
          <div className="divide-y divide-amber-900/20">
            <ContactPage side="left" />
            <ContactPage side="right" />
          </div>
        )}
      </div>

      {/* Project Detail Deep Dive Modal */}
      <ProjectDetailModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </div>
  );
};
