import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 sm:space-y-8 text-left"
          >
            <div>
              <motion.span 
                variants={itemVariants}
                className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide text-lg sm:text-xl"
              >
                Hello! I'm
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-dark-900 dark:text-white mt-2 leading-[1.1]"
              >
                Sai <span className="text-primary-600">Naren</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl sm:text-2xl font-bold text-dark-700 dark:text-dark-200 mt-4"
              >
                Computer Science Student <span className="text-dark-300 dark:text-dark-500 mx-2 text-xl font-light">|</span> AI/ML Enthusiast
              </motion.p>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-dark-500 dark:text-dark-400 max-w-xl leading-relaxed"
            >
              I build intelligent, user-centric applications and end-to-end systems 
              that solve real-world problems with clean, scalable code.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full bg-primary-600 text-white font-bold shadow-lg shadow-primary-500/25 hover:bg-primary-700 transition-all text-base"
              >
                Contact Me
              </motion.a>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-200 font-bold hover:bg-dark-50 dark:hover:bg-dark-800 transition-all text-base"
              >
                View Resume
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Social Links Group */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <SocialIcon href={personalInfo.github} icon={<FiGithub />} />
              <SocialIcon href={personalInfo.linkedin} icon={<FiLinkedin />} />
              <SocialIcon href={`mailto:${personalInfo.email}`} icon={<FiMail />} />
            </motion.div>
          </motion.div>

          {/* Right Column - Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="relative group">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* The Code Card */}
              <div className="relative bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl rounded-3xl border border-dark-200/50 dark:border-dark-700/50 shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
                {/* Window Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-dark-50/50 dark:bg-dark-800/50 border-b border-dark-200/30 dark:border-dark-700/30">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                    <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-dark-400 dark:text-dark-500 font-medium">developer.js</span>
                </div>
                
                {/* Code Body */}
                <div className="p-8 space-y-2">
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">1</span>
                    <p className="text-dark-400 dark:text-dark-500 italic">// Building useful products</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">2</span>
                    <p>
                      <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
                      <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">3</span>
                    <p className="pl-6">
                      <span className="text-dark-700 dark:text-dark-200">role:</span>{' '}
                      <span className="text-green-600 dark:text-green-400">"AI/ML Engineer"</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">4</span>
                    <p className="pl-6">
                      <span className="text-dark-700 dark:text-dark-200">builds:</span> [
                      <span className="text-green-600 dark:text-green-400">"AI Apps"</span>,{' '}
                      <span className="text-green-600 dark:text-green-400">"Web Apps"</span>],
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">5</span>
                    <p className="pl-6">
                      <span className="text-dark-700 dark:text-dark-200">focus:</span> [
                      <span className="text-green-600 dark:text-green-400">"Scalable Systems"</span>,{' '}
                      <span className="text-green-600 dark:text-green-400">"Real-world Impact"</span>],
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">6</span>
                    <p className="pl-6">
                      <span className="text-dark-700 dark:text-dark-200">mindset:</span>{' '}
                      <span className="text-green-600 dark:text-green-400">"Always learning 🚀"</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-dark-300 dark:text-dark-600 select-none">7</span>
                    <p>{'}'};</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, translateY: -3 }}
      whileTap={{ scale: 0.9 }}
      className="w-11 h-11 rounded-full flex items-center justify-center bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-200 dark:border-dark-700 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-500/30 transition-all shadow-sm"
    >
      {icon}
    </motion.a>
  );
}
