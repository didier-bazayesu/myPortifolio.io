import React from "react";
import { Project } from "../../types";
import { PROJECTS } from "../../data/portfolioData";
import { FolderGit2, ExternalLink, Github, Info, Zap } from "lucide-react";

interface ProjectsPageProps {
  pageIndex: 0 | 1 | 2 | 3; // 0=Pg8, 1=Pg9, 2=Pg10, 3=Pg11
  onInspectProject: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  pageIndex,
  onInspectProject,
}) => {
  const project = PROJECTS[pageIndex] || PROJECTS[0];
  const pageNum = `Pg. 0${8 + pageIndex}`;

  return (
    <div className="h-full flex flex-col justify-between p-6 lg:p-8 text-zinc-100">
      <div>
        <div className="text-[10px] font-sans uppercase tracking-[0.3em] text-indigo-400 font-bold mb-1">
          Chapter IV — {pageNum}
        </div>
        <h2 className="text-xl lg:text-2xl font-sans-luxury font-bold text-zinc-100 mb-3 border-b border-zinc-700/20 pb-2 flex items-center justify-between">
          <span className="truncate">{project.title}</span>
          <FolderGit2 className="w-5 h-5 text-indigo-400/40 shrink-0 ml-2" />
        </h2>

        {/* Project Card Printed on Paper */}
        <div className="space-y-3">
          {/* Screenshot Frame */}
          <div className="relative rounded-xl overflow-hidden border-2 border-zinc-700/30 shadow-md group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 lg:h-44 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {project.featured && (
              <div className="absolute top-2 right-2 bg-zinc-800 text-zinc-100 text-[10px] font-sans uppercase font-bold px-2 py-0.5 rounded shadow">
                Project Highlight
              </div>
            )}
          </div>

          <div>
            <h3 className="font-sans text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
              {project.subtitle}
            </h3>
            <p className="font-reading text-xs text-zinc-200 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Problem Solved Callout */}
          <div className="p-2.5 bg-zinc-800/60 rounded-lg border border-indigo-500/20 text-xs font-reading">
            <strong className="font-sans font-bold text-zinc-100 text-[10px] uppercase block mb-0.5">
              Engineering Value:
            </strong>
            <span className="text-zinc-200 italic line-clamp-2">
              {project.problemSolved}
            </span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded bg-zinc-700/50 text-zinc-100 text-[10px] font-mono border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] text-zinc-400 font-mono">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Controls & Footer */}
      <div className="pt-3 border-t border-zinc-700/20 space-y-2">
        <div className="flex items-center justify-between space-x-2">
          <button
            onClick={() => onInspectProject(project)}
            className="flex-1 py-1.5 rounded-lg bg-zinc-800/10 hover:bg-zinc-800/20 text-zinc-100 text-xs font-sans font-bold tracking-wider uppercase flex items-center justify-center space-x-1 transition-all border border-indigo-500/20"
          >
            <Info className="w-3.5 h-3.5 text-indigo-400" />
            <span>Architecture Specs</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-zinc-950 hover:bg-black text-zinc-100 transition-all"
            title="GitHub Code"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-indigo-900 hover:bg-zinc-800 text-zinc-100 transition-all shadow"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center justify-between text-[10px] text-zinc-400 font-sans italic">
          <span>
            {project.metrics?.[0]
              ? `${project.metrics[0].label}: ${project.metrics[0].value}`
              : "Production Ready"}
          </span>
          <span className="font-bold text-indigo-300">Page {8 + pageIndex}</span>
        </div>
      </div>
    </div>
  );
};
