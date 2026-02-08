import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const nameWords = ['Abhay', 'Kumar', 'Yadav'];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <motion.div
        ref={containerRef}
        className="w-full max-w-7xl"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
      >
        <motion.div
          className="glass-card rounded-[28px] p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Micro Label */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="micro-label"
              >
                PORTFOLIO 2026
              </motion.p>

              {/* Animated Name */}
              <motion.h1
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-['Sora'] leading-[0.95] tracking-tight"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {nameWords.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="inline-block mr-[0.25em]"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-[#A7B1D8] max-w-md leading-relaxed"
              >
                Computer Science undergrad. I design and build web experiences that feel like magic.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="btn-primary flex items-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View selected work</span>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative hidden lg:block"
              style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}
            >
              <div className="relative w-[280px] h-[280px] xl:w-[320px] xl:h-[320px]">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-[#4F6DFF]/20 blur-3xl scale-110" />

                {/* Portrait image */}
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/images/NAME.jpg"
                    alt="Abhay Kumar Yadav"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-white/5"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(79, 109, 255, 0.1), transparent)',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#A7B1D8] micro-label">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#4F6DFF] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
