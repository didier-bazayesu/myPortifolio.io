import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Code, Server, Database, Box, CheckCircle2, Cpu } from 'lucide-react';

interface SkillsPageProps {
  side: 'left' | 'right';
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ side }) => {
  const categoryIndex = side === 'left' ? [0, 1] : [2, 3];
  const categoriesToRender = SKILL_CATEGORIES.filter((_, idx) => categoryIndex.includes(idx));

  const pageNum = side === 'left' ? 'Pg. 04' : 'Pg. 05';

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-1">
          TECHNICAL EXPERTISE • {pageNum}
        </div>
        <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700 pb-2 flex items-center justify-between">
          <span>{side === 'left' ? 'TECHNICAL SKILLS' : 'DATABASES & TOOLS'}</span>
          {side === 'left' ? <Code className="w-5 h-5 text-[#6366f1]" /> : <Database className="w-5 h-5 text-[#6366f1]" />}
        </h2>

        <div className="space-y-4">
          {categoriesToRender.map((cat, idx) => (
            <div key={idx} className="bg-zinc-900/80 p-3.5 rounded-md border border-zinc-700 shadow-xs">
              <div className="flex items-center space-x-2 mb-1.5">
                <div className="p-1 rounded bg-zinc-900 text-[#18181b]">
                  {idx % 2 === 0 ? <Cpu className="w-3.5 h-3.5" /> : <Server className="w-3.5 h-3.5" />}
                </div>
                <h3 className="font-sans font-bold text-sm text-zinc-100">
                  {cat.category}
                </h3>
              </div>
              <p className="text-[11px] text-zinc-500 font-reading italic mb-3">
                {cat.description}
              </p>

              {/* Skill items grid */}
              <div className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-sans font-semibold text-zinc-200 flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#6366f1]" />
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-[10px] font-mono text-zinc-600 font-bold">
                        {skill.years}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-zinc-800/80 rounded-full overflow-hidden border border-zinc-600/60">
                      <div
                        className="h-full bg-[#6366f1] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-700 flex items-center justify-between text-[11px] text-zinc-500 font-sans italic">
        <span>Continuous Learning & Mastery</span>
        <span className="font-bold text-[#6366f1]">{side === 'left' ? 'Page 4' : 'Page 5'}</span>
      </div>
    </div>
  );
};
