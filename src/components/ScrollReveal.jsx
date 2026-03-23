import { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Reusable scroll-triggered reveal wrapper.
 * Wraps children and animates them when they scroll into view.
 */
export default function ScrollReveal({
  children,
  direction = 'up', // up | down | left | right | none
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const getInitial = useCallback(() => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 40 };
      case 'down': return { opacity: 0, y: -40 };
      case 'left': return { opacity: 0, x: 40 };
      case 'right': return { opacity: 0, x: -40 };
      case 'none': return { opacity: 0 };
      default: return { opacity: 0, y: 40 };
    }
  }, [direction]);

  const getAnimate = useCallback(() => {
    return { opacity: 1, x: 0, y: 0 };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
