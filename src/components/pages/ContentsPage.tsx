import React from "react";
import { SectionType } from "../../types";
import { DEVELOPER_INFO } from "../../data/portfolioData";
import { Bookmark, Compass, ArrowRight } from "lucide-react";

interface ContentsPageProps {
  onSelectSection: (section: SectionType) => void;
}

export const ContentsPage: React.FC<ContentsPageProps> = ({
  onSelectSection,
}) => {
  const contentsList: {
    number: string;
    title: string;
    subtitle: string;
    pageNum: string;
    section: SectionType;
  }[] = [
    {
      number: "01",
      title: "About Me",
      subtitle: "Biography, Philosophy & Highlights",
      pageNum: "Pg. 02 — 03",
      section: "about",
    },
    {
      number: "02",
      title: "Technical Skills",
      subtitle: "Frontend, Backend, Databases & Tools",
      pageNum: "Pg. 04 — 05",
      section: "skills",
    },
    {
      number: "03",
      title: "Career Experience",
      subtitle: "Professional Timeline & Impact",
      pageNum: "Pg. 06 — 07",
      section: "experience",
    },
    {
      number: "04",
      title: "Selected Projects",
      subtitle: "Full Stack SaaS & Platform Showcase",
      pageNum: "Pg. 08 — 11",
      section: "projects",
    },
    {
      number: "05",
      title: "Education & Honors",
      subtitle: "University Degree & AWS Certifications",
      pageNum: "Pg. 12 — 13",
      section: "education",
    },
    {
      number: "06",
      title: "Get In Touch",
      subtitle: "Direct Form, Socials & Resume",
      pageNum: "Pg. 14 — 15",
      section: "contact",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100 font-sans">
      <div>
        {/* Header Title */}
        <div className="border-b border-zinc-700 pb-4 mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6366f1] font-bold block mb-1">
              VOLUME I • TABLE OF CONTENTS
            </span>
            <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 tracking-wider">
              CONTENTS
            </h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-2"></div>
          </div>
          <Compass className="w-8 h-8 text-[#6366f1]/60" />
        </div>

        {/* Chapters List */}
        <div className="space-y-3">
          {contentsList.map((item) => (
            <button
              key={item.section}
              onClick={() => onSelectSection(item.section)}
              className="w-full text-left group p-2.5 rounded-md border border-transparent hover:border-zinc-300 hover:bg-zinc-900/80 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-3.5">
                <span className="font-sans font-bold text-xs text-[#6366f1] tracking-wider">
                  {item.number}
                </span>
                <div>
                  <div className="font-sans font-bold text-base text-zinc-100 group-hover:text-[#6366f1] flex items-center space-x-2 transition-colors">
                    <span>{item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6366f1] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="text-xs text-zinc-500 font-reading italic">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="hidden sm:block w-16 border-b border-dotted border-zinc-300" />
                <span className="font-sans text-[11px] font-medium text-zinc-600 bg-zinc-800/60 px-2 py-0.5 rounded">
                  {item.pageNum}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preface / Personal Greeting Box */}
      <div className="mt-4 pt-3 bg-zinc-900/80 p-4 rounded-md border border-zinc-700">
        <div className="flex items-center space-x-2 mb-1.5 text-[#6366f1] font-sans text-xs font-bold uppercase tracking-wider">
          <Bookmark className="w-3.5 h-3.5 text-[#6366f1]" />
          <span>AUTHOR'S PREFACE</span>
        </div>
        <p className="font-reading text-zinc-300 text-sm leading-relaxed italic">
          "Welcome to my interactive portfolio. This book is a simple way to
          share the work I have built, the tools I use, and the way I think
          through product and interface problems."
        </p>
        <div className="mt-2 text-right font-sans text-xs font-bold text-zinc-100">
          — {DEVELOPER_INFO.name}
        </div>
      </div>
    </div>
  );
};
