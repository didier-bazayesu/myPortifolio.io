import React from 'react';
import { EDUCATION } from '../../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, BookOpenCheck } from 'lucide-react';

interface EducationPageProps {
  side: 'left' | 'right';
}

export const EducationPage: React.FC<EducationPageProps> = ({ side }) => {
  const pageNum = side === 'left' ? 'Pg. 12' : 'Pg. 13';
  const mainDegree = EDUCATION[0];
  const certifications = EDUCATION.slice(1);

  if (side === 'left') {
    return (
      <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
        <div>
          <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
            Chapter V — {pageNum}
          </div>
          <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700/20 pb-2 flex items-center justify-between">
            <span>ACADEMIC DEGREE</span>
            <GraduationCap className="w-6 h-6 text-indigo-400/40" />
          </h2>

          <div className="bg-zinc-800/40 p-4 rounded-xl border border-indigo-500/20 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-300 font-bold bg-zinc-700/70 px-2 py-0.5 rounded">
                {mainDegree.period}
              </span>
              <span className="text-xs font-sans italic text-zinc-400">
                {mainDegree.location}
              </span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-base text-zinc-100">
                {mainDegree.degree}
              </h3>
              <p className="font-sans text-xs font-semibold text-indigo-300">
                {mainDegree.institution}
              </p>
            </div>

            {mainDegree.honors && (
              <div className="p-2 bg-zinc-900 text-zinc-100 rounded-lg text-xs font-sans font-bold flex items-center space-x-2 shadow">
                <Award className="w-4 h-4 text-sky-500" />
                <span>{mainDegree.honors}</span>
              </div>
            )}

            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-sans uppercase font-bold text-indigo-300 tracking-wider block">
                Key Accomplishments & Capstone:
              </span>
              <ul className="space-y-1.5 font-reading text-xs text-zinc-200 leading-relaxed">
                {mainDegree.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-zinc-700/20 flex items-center justify-between text-[11px] text-zinc-400 font-sans italic">
          <span>Foundational Computer Science Principles</span>
          <span className="font-bold text-indigo-300">Page 12</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
          Chapter V — {pageNum}
        </div>
        <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700/20 pb-2 flex items-center justify-between">
          <span>CERTIFICATIONS</span>
          <BookOpenCheck className="w-6 h-6 text-indigo-400/40" />
        </h2>

        <div className="space-y-4">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-zinc-800/40 p-3.5 rounded-xl border border-indigo-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-sans font-bold text-sm text-zinc-100">
                  {cert.degree}
                </span>
                <span className="text-[10px] font-mono text-indigo-300 font-bold">
                  {cert.period}
                </span>
              </div>
              <div className="text-xs font-sans font-medium text-indigo-300">
                {cert.institution}
              </div>
              <p className="font-reading text-xs text-zinc-200 leading-relaxed">
                {cert.achievements[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-zinc-700/20 flex items-center justify-between text-[11px] text-zinc-400 font-sans italic">
        <span>Cloud & Engineering Certifications</span>
        <span className="font-bold text-indigo-300">Page 13</span>
      </div>
    </div>
  );
};
