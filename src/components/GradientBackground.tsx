import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <>
      {/* Static Gradient Mesh */}
      <div className="gradient-mesh" />
      
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Orb 1 - Top Left */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(79, 109, 255, 0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-10%',
            left: '-10%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Orb 2 - Bottom Right */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(123, 143, 255, 0.35) 0%, transparent 70%)',
            filter: 'blur(70px)',
            bottom: '-5%',
            right: '-5%',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        
        {/* Orb 3 - Center */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(79, 109, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
        
        {/* Orb 4 - Top Right */}
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(79, 109, 255, 0.35) 0%, transparent 70%)',
            filter: 'blur(50px)',
            top: '10%',
            right: '20%',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </>
  );
}
