import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  MapPin
} from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Abhayyadav007' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abhay-kumar-yadav-96550928a/' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/AbhayKumar91493' },
];

// Magnetic Button Component
function MagneticButton({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="btn-primary flex items-center gap-3 w-full justify-center"
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

// Floating Label Input Component
function FloatingInput({
  label,
  type = 'text',
  name,
  required = false,
  isTextarea = false,
}: {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  isTextarea?: boolean;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="relative">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -28 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#4F6DFF' : '#A7B1D8',
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-4 top-4 pointer-events-none origin-left font-medium"
      >
        {label}
        {required && <span className="text-[#4F6DFF] ml-1">*</span>}
      </motion.label>

      <InputComponent
        type={type}
        name={name}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder-transparent focus:outline-none focus:border-[#4F6DFF] transition-colors duration-300 ${isTextarea ? 'pt-6 pb-4 min-h-[140px] resize-none' : 'py-4'
          }`}
      />

      {/* Focus underline animation */}
      <motion.div
        initial={false}
        animate={{
          scaleX: isFocused ? 1 : 0,
          opacity: isFocused ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F6DFF] origin-left rounded-b-xl"
      />
    </div>
  );
}

export function Contact() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="micro-label mb-4">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Sora'] mb-4">
            Let's build something <span className="accent-gradient">useful</span>
          </h2>
          <p className="text-[#A7B1D8] max-w-lg mx-auto">
            Open to collaborations, freelance projects, and internship opportunities.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
          {/* Contact Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="glass-card-strong rounded-[24px] p-8"
            >
              <h3 className="text-2xl font-bold text-white font-['Sora'] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#4F6DFF]/10">
                    <Mail className="w-5 h-5 text-[#4F6DFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A7B1D8] mb-1">Email</p>
                    <a
                      href="abhay8105809699@gmail.com"
                      className="text-white hover:text-[#4F6DFF] transition-colors"
                    >
                      abhay8105809699@gmail.comai
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#4F6DFF]/10">
                    <MapPin className="w-5 h-5 text-[#4F6DFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#A7B1D8] mb-1">Location</p>
                    <p className="text-white">Punjab, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-[#A7B1D8] mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 text-[#A7B1D8] hover:bg-[#4F6DFF]/10 hover:text-[#4F6DFF] transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Message Card */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-[24px] p-6"
            >
              <p className="text-[#A7B1D8] text-sm leading-relaxed">
                "I'm always excited to work on new projects and collaborate with
                creative minds. Whether you have a project in mind or just want
                to say hi, feel free to reach out!"
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass-card-strong rounded-[24px] p-8 space-y-6"
            >
              <h3 className="text-xl font-semibold text-white font-['Sora'] mb-6">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <FloatingInput
                  label="Your Name"
                  name="name"
                  required
                />
                <FloatingInput
                  label="Your Email"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <FloatingInput
                label="Subject"
                name="subject"
              />

              <FloatingInput
                label="Your Message"
                name="message"
                isTextarea
                required
              />

              {/* Submit Button */}
              <div className="pt-4">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full py-4 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-center font-medium"
                  >
                    Message sent successfully!
                  </motion.div>
                ) : (
                  <MagneticButton>
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </MagneticButton>
                )}
              </div>

              <p className="text-xs text-[#A7B1D8]/60 text-center">
                I'll get back to you within 24-48 hours.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
