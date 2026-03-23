import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';
import { 
  SiReact, SiHtml5, SiJavascript, 
  SiNodedotjs, SiExpress, SiMysql, SiInsomnia,
  SiScikitlearn, SiPandas, SiNumpy, SiPlotly,
  SiGit, SiGithub, SiLinux,
  SiPython, SiOpenjdk, SiCplusplus, SiC, SiPostgresql 
} from 'react-icons/si';
import { FaCss3Alt, FaAws } from 'react-icons/fa';
import { FiCode, FiDatabase, FiCpu, FiTool, FiTerminal, FiMessageSquare, FiUsers, FiAward, FiClock, FiSettings, FiBriefcase } from 'react-icons/fi';

const IconMap = {
  SiReact, SiHtml5, FaCss3Alt, SiJavascript, 
  SiNodedotjs, SiExpress, SiMysql, SiInsomnia,
  SiScikitlearn, SiPandas, SiNumpy, SiPlotly,
  SiGit, SiGithub, FaAws, SiLinux,
  SiPython, SiOpenjdk, SiCplusplus, SiC, SiPostgresql
};

const categoryIcons = {
  "FRONTEND": FiCode,
  "BACKEND": FiDatabase,
  "AI / ML": FiCpu,
  "TOOLS": FiTool,
  "LANGUAGES": FiTerminal
};

const softSkills = [
  {
    title: 'Communication',
    desc: 'Clear, concise communication in team and client discussions.',
    icon: FiMessageSquare
  },
  {
    title: 'Leadership',
    desc: 'Takes ownership and helps teams move toward shared goals.',
    icon: FiAward
  },
  {
    title: 'Teamwork',
    desc: 'Collaborates effectively across design, development, and testing.',
    icon: FiUsers
  },
  {
    title: 'Problem Solving',
    desc: 'Breaks down challenges and delivers practical solutions.',
    icon: FiBriefcase
  },
  {
    title: 'Time Management',
    desc: 'Balances priorities and consistently delivers on deadlines.',
    icon: FiClock
  },
  {
    title: 'Adaptability',
    desc: 'Learns quickly and adjusts smoothly to new tools and workflows.',
    icon: FiSettings
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Technical Skills');

  return (
    <section id="skills" className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-[85rem] mx-auto px-6">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Skills
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              Tech stack and tools I use to design, build, and ship reliable products.
            </p>
          </div>
        </ScrollReveal>

        {/* Custom Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1.5 rounded-xl bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700 shadow-sm transition-all duration-300">
              <button
                onClick={() => setActiveTab('Technical Skills')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'Technical Skills'
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'text-dark-400 hover:text-dark-900 dark:hover:text-white'
                  }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab('Soft Skills')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'Soft Skills'
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'text-dark-400 hover:text-dark-900 dark:hover:text-white'
                  }`}
              >
                Soft Skills
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'Technical Skills' ? (
              /* Technical Skills Grid */
              <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {Object.entries(skills).map(([category, items], idx) => {
                  const CategoryIcon = categoryIcons[category] || FiCode;
                  return (
                    <ScrollReveal
                      key={category}
                      delay={idx * 0.1}
                      className={category === "LANGUAGES" ? "md:col-span-2" : ""}
                    >
                      <div className="bg-white/80 dark:bg-dark-900/40 backdrop-blur-sm rounded-3xl border border-dark-100 dark:border-dark-700/50 p-8 shadow-sm hover:shadow-xl hover:border-primary-500/20 transition-all duration-500 group">
                        <div className="flex items-center gap-3 mb-8">
                          <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-500">
                            <CategoryIcon size={20} />
                          </div>
                          <h3 className="text-dark-900 dark:text-white text-lg font-bold tracking-wider">
                            {category}
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                          {items.map((skill) => {
                            const Icon = IconMap[skill.icon] || SiReact;
                            return (
                              <div
                                key={skill.name}
                                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-dark-50 dark:border-dark-800 bg-white dark:bg-dark-800/50 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 group/skill"
                              >
                                <div 
                                  className="mb-3 transition-transform duration-300 group-hover/skill:scale-110"
                                  style={{ color: skill.color }}
                                >
                                  <Icon size={32} />
                                </div>
                                <span className="text-[13px] font-bold text-dark-600 dark:text-dark-300 text-center">
                                  {skill.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              /* Soft Skills Grid */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {softSkills.map((skill, idx) => (
                  <ScrollReveal key={skill.title} delay={idx * 0.1}>
                    <div className="bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 rounded-2xl p-8 h-full flex flex-col items-center text-center hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group">
                      <div className="text-primary-500 mb-5 p-4 rounded-2xl bg-primary-50 dark:bg-primary-500/10 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                        <skill.icon size={28} />
                      </div>
                      <h3 className="text-dark-900 dark:text-white text-xl font-bold mb-3">
                        {skill.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-300 text-[13px] leading-relaxed max-w-[200px]">
                        {skill.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
