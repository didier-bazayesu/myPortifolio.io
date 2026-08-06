import React from "react";
import { DEVELOPER_INFO } from "../../data/portfolioData";
import { User, Target, Award, Code2, Sparkles } from "lucide-react";

interface AboutPageProps {
  side: "left" | "right";
}

export const AboutPage: React.FC<AboutPageProps> = ({ side }) => {
  if (side === "left") {
    return (
      <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
        <div>
          <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-1">
            BIOGRAPHY • PAGE 02
          </div>
          <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-2">
            DIDIER{" "}
            <span className="italic text-zinc-300 font-sans">BAZAYESU</span>
          </h2>
          <div className="w-12 h-1 bg-[#6366f1] mb-4"></div>

          {/* Portrait Image Frame */}
          <div className="relative my-3 rounded-md overflow-hidden border border-zinc-700 shadow-lg group">
            <img
              src={DEVELOPER_INFO.aboutImage}
              alt={DEVELOPER_INFO.name}
              className="w-full h-44 lg:h-52 object-cover object-top grayscale contrast-125 brightness-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <div>
                <span className="text-xs font-sans text-[#6366f1] font-bold block">
                  {DEVELOPER_INFO.name}
                </span>
                <span className="text-[11px] text-zinc-300 italic font-reading">
                  {DEVELOPER_INFO.title} • {DEVELOPER_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 gap-2.5 my-2">
          {DEVELOPER_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 p-2.5 rounded-md border border-zinc-700"
            >
              <span className="block font-sans text-lg font-extrabold text-zinc-100">
                {stat.value}
              </span>
              <span className="block text-[10px] text-zinc-500 uppercase font-sans font-medium tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="p-3 bg-zinc-900 text-[#18181b] rounded-md border border-zinc-800 text-xs italic font-reading text-center shadow-sm">
          "{DEVELOPER_INFO.tagline}"
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#6366f1] font-bold mb-1">
          TECHNICAL EXPERTISE • PAGE 03
        </div>
        <h2 className="text-2xl lg:text-3xl font-sans-luxury font-bold text-zinc-100 mb-4 border-b border-zinc-700 pb-2 flex items-center justify-between">
          <span>ABOUT & PHILOSOPHY</span>
          <User className="w-5 h-5 text-[#6366f1]" />
        </h2>

        <div className="space-y-3 font-reading text-zinc-300 text-sm leading-relaxed">
          <p>
            <strong className="font-sans text-zinc-100">
              Didier Bazayesu
            </strong>{" "}
            is a Full Stack Developer who enjoys turning product ideas into
            usable web experiences.
          </p>
          <p>
            I like to keep the process practical: thoughtful design, clean code,
            and a steady focus on what the user actually needs.
          </p>
        </div>

        {/* Mission Statement Box */}
        <div className="mt-5 p-3.5 bg-zinc-900/90 rounded-md border-l-2 border-[#6366f1] space-y-1 shadow-xs">
          <div className="flex items-center space-x-1.5 text-xs font-sans font-bold text-zinc-100 uppercase tracking-wider">
            <Target className="w-4 h-4 text-[#6366f1]" />
            <span>Engineering Mission</span>
          </div>
          <p className="font-reading text-xs text-zinc-600 leading-relaxed italic">
            "{DEVELOPER_INFO.missionStatement}"
          </p>
        </div>
      </div>

      {/* Core Principles Pill Badges */}
      <div className="space-y-2 mt-4">
        <div className="text-[11px] font-sans font-bold text-[#6366f1] uppercase tracking-widest flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-[#6366f1]" />
          <span>Core Strengths</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Clean Architecture",
            "Full Stack TypeScript",
            "Performance Optimization",
            "Responsive UX",
            "REST & GraphQL",
          ].map((item, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-full bg-zinc-800/60 border border-zinc-600/60 text-zinc-200 text-[11px] font-sans font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
