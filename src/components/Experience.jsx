import { motion } from 'framer-motion';
import { FiAward, FiStar, FiHeart, FiBookOpen } from 'react-icons/fi';
import { achievements, extraCurricular } from '../data/portfolio';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-mono font-medium text-primary-500 tracking-widest uppercase">
              Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mt-3">
              Achievements &{' '}
              <span className="text-gradient">Activities</span>
            </h2>
            <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-lg mx-auto">
              Beyond technical skills—recognitions and community contributions that define my professional journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Achievements */}
          <div className="space-y-8">
            <ScrollReveal>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-dark-900 dark:text-white mb-8">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-500">
                  <FiStar size={24} />
                </div>
                Key Achievements
              </h3>
            </ScrollReveal>
            
            <div className="grid gap-6">
              {achievements.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="group p-6 rounded-3xl bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <FiAward size={22} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Column - Extra-Curricular */}
          <div className="space-y-8">
            <ScrollReveal delay={0.2}>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-dark-900 dark:text-white mb-8">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-500/10 text-primary-500">
                  <FiHeart size={24} />
                </div>
                Community & Culture
              </h3>
            </ScrollReveal>

            <div className="grid gap-4">
              {extraCurricular.map((activity, i) => (
                <ScrollReveal key={i} delay={0.3 + (i * 0.1)}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-dark-800/80 border border-dark-100 dark:border-dark-700/50 shadow-sm hover:border-primary-500/20 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                    <p className="text-sm font-medium text-dark-700 dark:text-dark-200">
                      {activity}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Decorative Card to fill space */}
            <ScrollReveal delay={0.5}>
              <div className="relative mt-8 p-8 rounded-3xl bg-gradient-to-br from-primary-500/5 to-primary-600/5 border border-primary-500/10 flex flex-col items-center text-center overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-primary-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <FiBookOpen size={30} className="text-primary-500 mb-4 mx-auto" />
                  <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-2">Continual Growth</h4>
                  <p className="text-xs text-dark-500 dark:text-dark-400 max-w-[220px]">
                    Actively participating in workshops, cultural events, and community service.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
