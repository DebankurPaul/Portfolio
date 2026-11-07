import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Award, 
  CheckCircle2, 
  Mail, 
  Github, 
  Linkedin,
  MapPin
} from 'lucide-react';
import { personalInfo, experiencesData, projectsData, skillCategories, achievementsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#16161a]">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-500" />
              <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-900 dark:text-white">
                Debankur Paul — Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-800 dark:text-zinc-200 text-sm leading-relaxed">
            
            {/* Header info */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-zinc-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold font-heading text-base mt-1">
                {personalInfo.title}
              </p>
              
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-indigo-500">
                  <Mail className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-500">
                  <Github className="w-3.5 h-3.5 text-indigo-500" />
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-500">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>LinkedIn</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Assam, India</span>
                </span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">Dhemaji Engineering College</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    Bachelor of Technology in Computer Science & Engineering (2nd Year)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-semibold px-2 py-1 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    CGPA: 8.14
                  </span>
                  <div className="text-xs text-zinc-500 font-mono mt-1">2023 – 2027</div>
                </div>
              </div>
            </div>

            {/* Experience / Research */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Research & Internships</span>
              </h2>
              <div className="space-y-4">
                {experiencesData.map((exp) => (
                  <div key={exp.id} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <div>
                        <span className="font-bold text-zinc-900 dark:text-white">{exp.role}</span>
                        <span className="text-zinc-400 mx-1.5">•</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{exp.organization}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                    </div>

                    {exp.funding && (
                      <div className="mt-1 text-xs text-amber-600 dark:text-amber-400 font-medium">
                        {exp.funding}
                      </div>
                    )}
                    {exp.supervisors && (
                      <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {exp.supervisors}
                      </div>
                    )}

                    <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" />
                <span>Featured Projects</span>
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <div className="font-bold text-zinc-900 dark:text-white">
                        {proj.title}
                        {proj.badge && (
                          <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                            {proj.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-zinc-500">
                        {proj.tags.join(' · ')}
                      </div>
                    </div>

                    <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-500 mt-1">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Technical Skills</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((group) => (
                  <div key={group.category} className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800">
                    <span className="font-bold text-zinc-900 dark:text-white">{group.category}: </span>
                    <span className="text-zinc-600 dark:text-zinc-300">
                      {group.skills.map(s => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider font-mono text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications & Honors</span>
              </h2>
              <div className="space-y-2 text-xs">
                {achievementsData.map((item) => (
                  <div key={item.id} className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-white">{item.title}</span>
                      <span className="text-zinc-500 ml-2">({item.issuer})</span>
                    </div>
                    <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#16161a] flex items-center justify-between">
            <span className="text-xs text-zinc-500 font-mono">
              Debankur Paul • Ready for Internship Roles
            </span>
            <button
              onClick={handlePrint}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download / Save as PDF</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
