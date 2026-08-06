import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

interface ExperiencePageProps {
  side: 'left' | 'right';
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ side }) => {
  const experiencesToRender = side === 'left' ? [EXPERIENCES[0]] : [EXPERIENCES[1], EXPERIENCES[2]].filter(Boolean);
  const pageNum = side === 'left' ? 'Pg. 06' : 'Pg. 07';

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
          Chapter III — {pageNum}
        </div>
        <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700/20 pb-2 flex items-center justify-between">
          <span>{side === 'left' ? 'WORK EXPERIENCE' : 'CAREER TIMELINE'}</span>
          <Briefcase className="w-6 h-6 text-indigo-400/40" />
        </h2>

        <div className="space-y-4">
          {experiencesToRender.map((exp) => (
            <div key={exp.id} className="relative pl-4 border-l-2 border-indigo-500/40 space-y-2 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-700 shadow-md group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-bold text-base text-zinc-100">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] font-sans font-bold bg-zinc-700/70 px-2 py-0.5 rounded text-indigo-300 flex items-center space-x-1">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>{exp.period}</span>
                  </span>
                </div>
                
                <div className="flex items-center space-x-2 text-xs font-sans font-medium text-indigo-300 mb-1.5">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-0.5 italic text-zinc-400">
                    <MapPin className="w-2.5 h-2.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-1 font-reading text-xs text-zinc-200 leading-relaxed">
                {exp.description.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start space-x-1.5">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Key achievement badge */}
              <div className="p-2 bg-zinc-800/60 rounded-lg border border-indigo-500/20 text-[11px] font-reading text-zinc-100 flex items-start space-x-1.5">
                <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-sans font-bold block text-[10px] uppercase text-indigo-300">Key Impact:</strong>
                  <span>{exp.keyAchievement}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 pt-1">
                {exp.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-1.5 py-0.5 rounded bg-zinc-900/10 text-zinc-100 text-[10px] font-mono border border-zinc-700/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-700/20 flex items-center justify-between text-[11px] text-zinc-400 font-sans italic">
        <span>Engineering Leadership & Growth</span>
        <span className="font-bold text-indigo-300">{side === 'left' ? 'Page 6' : 'Page 7'}</span>
      </div>
    </div>
  );
};
