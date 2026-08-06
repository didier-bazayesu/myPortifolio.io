import React from "react";
import { Project } from "../types";
import {
  X,
  ExternalLink,
  Github,
  Layers,
  Zap,
  CheckCircle2,
  Server,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-paper rounded-2xl border-2 border-indigo-500/40 shadow-2xl p-6 lg:p-8 text-zinc-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/10 hover:bg-zinc-800/20 text-zinc-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <span className="text-xs font-sans uppercase tracking-widest text-indigo-400 font-bold block mb-1">
            Project Architecture Spec
          </span>
          <h2 className="text-2xl font-sans-luxury font-bold text-zinc-100">
            {project.title}
          </h2>
          <p className="text-sm font-sans italic text-zinc-300">
            {project.subtitle}
          </p>
        </div>

        {/* Image Frame */}
        <div className="relative rounded-xl overflow-hidden border-2 border-zinc-700/30 mb-5 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover"
          />
        </div>

        {/* Description & Problem Solved */}
        <div className="space-y-4 font-reading text-sm leading-relaxed text-zinc-200 mb-6">
          <div>
            <h4 className="font-sans text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Project Summary</span>
            </h4>
            <p>{project.description}</p>
          </div>

          <div className="p-3 bg-zinc-800/80 rounded-xl border-l-4 border-indigo-500">
            <h4 className="font-sans text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1">
              Why It Exists:
            </h4>
            <p className="italic text-zinc-100">{project.problemSolved}</p>
          </div>

          <div>
            <h4 className="font-sans text-xs font-bold text-zinc-100 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
              <Server className="w-4 h-4 text-indigo-400" />
              <span>Implementation Notes</span>
            </h4>
            <p>{project.architecture}</p>
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-zinc-700/50 p-2.5 rounded-lg border border-indigo-500/20 text-center"
              >
                <span className="block font-sans text-base font-extrabold text-zinc-100">
                  {m.value}
                </span>
                <span className="block text-[10px] text-zinc-300 font-medium uppercase">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="mb-6">
          <h4 className="font-sans text-xs font-bold text-zinc-100 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Technologies Used</span>
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-100 text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-700/20 flex items-center justify-end space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-zinc-950 hover:bg-black text-zinc-100 text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-900 hover:from-indigo-600 hover:to-indigo-800 text-zinc-100 text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};
