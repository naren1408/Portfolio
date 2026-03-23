import { motion } from 'framer-motion';

/**
 * Matrix-style background with subtle 0s and 1s.
 */
export function MatrixBackground() {
  const binary = "010110010101011010110101".split("");
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] dark:opacity-[0.07]">
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-10 p-10 transform -rotate-12 scale-150">
        {Array.from({ length: 144 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              color: ['#6366f1', '#10b981', '#6366f1'] 
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              delay: Math.random() * 10 
            }}
            className="text-xs font-mono select-none"
          >
            {binary[i % binary.length]}
          </motion.span>
        ))}
      </div>
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

/**
 * Clean, subtle modern animated gradient background.
 */
export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 mix-blend-multiply dark:mix-blend-screen -z-10">
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="w-full h-full bg-[size:400%_400%] bg-gradient-to-br from-primary-500/10 via-white/0 to-primary-800/10 dark:from-primary-900/10 dark:via-dark-950/0 dark:to-primary-600/10 blur-[100px]"
      />
    </div>
  );
}

/**
 * Floating gradient orbs for background decoration.
 */
export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 -z-10">
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-primary-400/20 dark:bg-primary-900/20 blur-[120px]"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-600/20 dark:bg-primary-800/20 blur-[150px]"
      />
    </div>
  );
}
