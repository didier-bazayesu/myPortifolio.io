
import React from 'react';
import { ChevronRight, Download, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Available for Internships</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Building Digital Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              With Passion & Code.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
            Hi, I'm <span className="font-semibold text-slate-900">Didier Bazayesu</span>, 
            an IT student and aspiring Full-Stack Web Developer. I enjoy turning complex ideas into 
            simple, reliable web applications using React, Node.js, and modern tooling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 group"
            >
              View My Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:border-blue-600 transition-all"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-slate-400">
            <a
              href="https://github.com/didier-bazayesu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="/Didier_Bazayesu_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-medium hover:text-blue-600 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
