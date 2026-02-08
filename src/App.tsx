import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedCursor } from '@/components/AnimatedCursor';
import { WaterRippleCursor } from '@/components/WaterRippleCursor';
import { GradientBackground } from '@/components/GradientBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Resume } from '@/sections/Resume';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

// Loading Screen Component
function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#070A12] flex items-center justify-center"
    >
      <div className="relative">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-white font-['Sora']"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            A
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-[#4F6DFF]"
          >
            Y
          </motion.span>
        </motion.div>

        {/* Loading Bar */}
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full bg-gradient-to-r from-[#4F6DFF] to-[#7B8FFF] rounded-full"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-center text-sm text-[#A7B1D8] micro-label"
        >
          LOADING EXPERIENCE
        </motion.p>
      </div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Preload images
    const images = [
      '/images/hero_portrait.jpg',
      '/images/project_campus_marketplace.jpg',
      '/images/project_study_buddy.jpg',
      '/images/project_event_hub.jpg',
      '/images/project_attendance_tracker.jpg',
      '/images/project_notes_exchange.jpg',
      '/images/project_lost_found.jpg',
      '/images/project_coding_challenges.jpg',
      '/images/project_mentorship_connect.jpg',
    ];

    let loadedCount = 0;
    const totalImages = images.length;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalImages) {
        setIsReady(true);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
      img.src = src;
    });

    // Fallback: if images take too long, proceed anyway
    const fallbackTimer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {(isLoading || !isReady) && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Custom Animated Cursor */}
        <AnimatedCursor />

        {/* Water Ripple Cursor Effect */}
        <WaterRippleCursor />

        {/* Gradient Background */}
        <GradientBackground />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </>
  );
}

export default App;
