import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiChevronRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.15} direction="up" className="h-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative h-full rounded-3xl overflow-hidden bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-shadow duration-500 flex flex-col"
      >
        {/* Gradient top accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600" />

        {/* Glow effect on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="p-7 sm:p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-xs font-mono text-primary-500 dark:text-primary-400">
                {project.date}
              </span>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mt-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-2 shrink-0 ml-4">
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                aria-label="GitHub repo"
              >
                <FiGithub size={16} />
              </motion.a>
              {project.liveLink && project.liveLink !== '#' && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                  aria-label="Live demo"
                >
                  <FiExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed mb-5 flex-grow">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                <FiChevronRight className="mt-0.5 text-primary-500 shrink-0" size={14} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-100 dark:border-dark-700/50">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              Featured{' '}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              A showcase of my recent projects and applications
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
