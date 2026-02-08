import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const footerLinks = [
  { name: 'Resume', href: 'https://drive.google.com/file/d/1NWnMPa3Wiq2kPPSq_lRaAPjaSZFsPGE9/view?usp=drive_link' },
  { name: 'GitHub', href: 'https://github.com/Abhayyadav007' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/abhay-kumar-yadav-96550928a/' },
  { name: 'Twitter', href: 'https://x.com/AbhayKumar91493' },
];

export function Footer() {
  const [footerRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 lg:py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card-strong rounded-[28px] p-8 lg:p-12 text-center"
        >
          {/* Thank You Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Sora'] mb-4"
          >
            Thanks for stopping by.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#A7B1D8] mb-8"
          >
            Built with React + Framer Motion.
          </motion.p>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-5 py-2.5 rounded-full bg-white/5 text-[#A7B1D8] hover:bg-[#4F6DFF]/10 hover:text-[#4F6DFF] transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4 mb-8"
          >
            {[
              { icon: Github, href: 'https://github.com/Abhayyadav007' },
              { icon: Linkedin, href: 'https://linkedin.com/in/abhay-kumar-yadav-96550928a' },
              { icon: Twitter, href: 'https://twitter.com/abhay8105809699' },
              { icon: Mail, href: 'mailto:abhay8105809699@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 text-[#A7B1D8] hover:bg-[#4F6DFF]/10 hover:text-[#4F6DFF] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm text-[#A7B1D8] flex items-center gap-1"
            >
              Made by Abhay Kumar Yadav
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-sm text-[#A7B1D8]"
            >
              © 2026 All rights reserved.
            </motion.p>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.4 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-[#4F6DFF] text-white shadow-lg shadow-[#4F6DFF]/30 hover:shadow-xl hover:shadow-[#4F6DFF]/40 transition-all duration-300 z-40"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
