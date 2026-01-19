
import React, { useState } from 'react';

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import didierImage from './components/1742051917044_5pjv8k_2_0-01.jpeg.jpg';
import { 
  SKILL_CATEGORIES, 
  PROJECTS, 
  EDUCATION, 
  CONTACT_INFO 
} from './constants';
import { 
  Code2, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Mail, 
  Github, 
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  ArrowUpRight,
  // Fix: Added missing ChevronRight import from lucide-react
  ChevronRight
} from 'lucide-react';

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const filteredProjects = selectedSkill
    ? PROJECTS.filter((project) => project.tech.includes(selectedSkill))
    : PROJECTS;

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearSkillFilter = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navigation />
      
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                  About Me
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  I am an IT student pursuing an Advanced Diploma in Computer Science at <span className="text-slate-900 font-semibold underline decoration-blue-500 underline-offset-4">Tumba College</span>. 
                  I specialise in building web applications that are clean, fast, and easy to use.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Recently, I participated in the <span className="text-slate-900 font-semibold">Rwanda Hackathon 2025</span> and worked on a full-stack skills and jobs mapping system. 
                  I'm particularly interested in React, Node.js, and modern JavaScript practices for solving real problems.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
                    <div className="text-sm text-slate-500 font-medium">Core Projects</div>
                  </div>
                  <a
                    href="#skills"
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 block hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                    <div className="text-sm text-slate-500 font-medium">Tech Skills</div>
                  </a>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 bg-blue-50 relative group max-w-full">
                  <img 
                    src={didierImage} 
                    alt="Didier Bazayesu" 
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Accent element */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Internship Ready</div>
                      <div className="text-xs text-slate-500">Available from June 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A toolkit curated for building modern, scalable, and efficient web applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    <Code2 className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <button
                        key={j}
                        type="button"
                        onClick={() => handleSkillClick(skill)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                          selectedSkill === skill
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-slate-100 text-slate-700 border-transparent hover:bg-blue-600 hover:text-white'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Work</h2>
                <p className="text-slate-500 max-w-xl">
                  A selection of projects that showcase my ability to design user interfaces, structure backends,
                  and work with real data in a professional context.
                </p>
                {selectedSkill && (
                  <div className="mt-4 inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
                    <span>
                      Showing projects using: <span className="font-semibold">{selectedSkill}</span>
                    </span>
                    <button
                      type="button"
                      onClick={clearSkillFilter}
                      className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
                    >
                      Clear filter
                    </button>
                  </div>
                )}
              </div>
              <a href="https://github.com/didier-bazayesu" target="_blank" className="text-blue-600 font-bold flex items-center hover:underline">
                View all on GitHub <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredProjects.map((project, i) => (
                <div key={i} className="group flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        className="p-4 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-xl"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, j) => (
                        <button
                          key={j}
                          type="button"
                          onClick={() => handleSkillClick(t)}
                          className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${
                            selectedSkill === t
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'text-blue-600 bg-blue-50 border-transparent hover:bg-blue-600 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:translate-x-1 transition-transform"
                    >
                      Case Study <ChevronRight className="ml-1 w-4 h-4 text-blue-600" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section id="education" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform origin-top-right"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                  <GraduationCap className="mr-4 text-blue-500 w-8 h-8" />
                  Education
                </h2>
                <div className="space-y-12">
                  {EDUCATION.map((edu, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700"></div>
                      <div className="text-blue-500 font-bold text-sm mb-2">{edu.period}</div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <div className="text-slate-400 font-medium mb-2">{edu.institution}</div>
                      <div className="flex items-center text-xs text-slate-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                  <Award className="mr-4 text-blue-500 w-8 h-8" />
                  Achievements
                </h2>
                <div className="space-y-6">
                  {[
                    "Rwanda Hackathon 2025 Participant",
                    "Capstone Project: Full-Stack Job Mapping System",
                    "Advanced Web Security Workshop Completion",
                    "Active Open Source Contributor"
                  ].map((award, i) => (
                    <div key={i} className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <p className="text-slate-300 font-medium leading-tight">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Let's build something great.</h2>
                 <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto">
                   Looking for a dedicated Web Development Intern? I'm ready to learn, contribute, and grow with your team.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                   <a href={`mailto:${CONTACT_INFO.email}`} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all group">
                     <Mail className="w-6 h-6 mx-auto mb-3 text-blue-200" />
                     <div className="text-sm font-bold truncate">{CONTACT_INFO.email}</div>
                   </a>
                   <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/20 transition-all">
                     <Phone className="w-6 h-6 mx-auto mb-3 text-blue-200" />
                     <div className="text-sm font-bold">{CONTACT_INFO.phone}</div>
                   </a>
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                     <MapPin className="w-6 h-6 mx-auto mb-3 text-blue-200" />
                     <div className="text-sm font-bold">{CONTACT_INFO.location}</div>
                   </div>
                 </div>

                 <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                   <a 
                    href={CONTACT_INFO.github} 
                    target="_blank" 
                    className="flex items-center space-x-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
                   >
                     <Github className="w-5 h-5" />
                     <span>GitHub Profile</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-slate-900">Didier Bazayesu</span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} — Created by @Didider-Bazayesu
          </div>
          <div className="flex items-center space-x-4">
             {/* Social placeholders if needed */}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
