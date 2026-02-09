import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import {
  Download,
  GraduationCap,
  Award,
  Code2,
  Palette,
  Database,
  Globe
} from 'lucide-react';
const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Javascript', level: 75 },
  { name: 'Prisma', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Postgress', level: 75 },
  { name: 'Express', level: 90 },
  { name: 'Nextjs', level: 80 },
  { name: 'Mongoose', level: 90 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'TailwindCSS', level: 90 },
  { name: 'Docker', level: 60 },
  { name: 'C++', level: 70 },
  { name: 'Rust', level: 60 },
  { name: 'Java', level: 60 },
];


const timelineItems = [
  {
    id: 1,
    type: 'education',
    title: 'B.Tech Computer Science',
    organization: 'Lovely Professional University',
    period: '2022 - Present',
    description: 'Pursuing Computer Science with focus on web development and software engineering.',
    icon: GraduationCap,
  },
  {
    id: 2,
    type: 'education',
    title: 'Higher Secondary (12th)',
    organization: 'Jindal Vidya Mandir',
    period: '2020 - 2022',
    description: 'Completed 12th grade with 80% aggregate.',
    icon: Award,
  },
  {
    id: 3,
    type: 'education',
    title: 'Secondary School (10th)',
    organization: 'Jindal Vidya Mandir',
    period: '2018 - 2020',
    description: 'Completed 10th grade with 87% aggregate.',
    icon: Award,
  },
];

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL'],
  },
  {
    name: 'Design',
    icon: Palette,
    skills: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
  },
  {
    name: 'Other',
    icon: Globe,
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'REST APIs'],
  },
];

export function Resume() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const cardVariants = {
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
      id="resume"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="micro-label mb-4">RESUME</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Sora']">
              My <span className="accent-gradient">journey</span> so far
            </h2>
          </div>

          <motion.button
            onClick={() =>
              window.open("https://drive.google.com/file/d/1NWnMPa3Wiq2kPPSq_lRaAPjaSZFsPGE9/view?usp=drive_link", "_blank")
            }
            className="btn-primary flex items-center gap-3 w-fit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-white font-['Sora'] mb-6">
              Education Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4F6DFF] via-[#4F6DFF]/50 to-transparent" />

              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-16 pb-8 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                    className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#4F6DFF]/10 border border-[#4F6DFF]/30 flex items-center justify-center"
                  >
                    <item.icon className="w-5 h-5 text-[#4F6DFF]" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="glass-card rounded-[20px] p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm text-[#4F6DFF] font-medium">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white font-['Sora'] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#A7B1D8] text-sm mb-2">
                      {item.organization}
                    </p>
                    <p className="text-[#A7B1D8]/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-white font-['Sora'] mb-6">
              Skills & Expertise
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={cardVariants}
                  className="glass-card rounded-[20px] p-6 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#4F6DFF]/10 group-hover:bg-[#4F6DFF]/20 transition-colors">
                      <category.icon className="w-5 h-5 text-[#4F6DFF]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white font-['Sora']">
                      {category.name}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-[#A7B1D8] border border-white/5 hover:bg-[#4F6DFF]/10 hover:text-[#4F6DFF] hover:border-[#4F6DFF]/20 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement Stats */}
            <motion.div
              variants={cardVariants}
              className="glass-card rounded-[20px] p-6"
            >
              <h4 className="text-lg font-semibold text-white font-['Sora'] mb-6">
                Quick Stats
              </h4>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="text-3xl font-bold text-[#4F6DFF]"
                  >
                    3+
                  </motion.p>
                  <p className="text-xs text-[#A7B1D8] mt-1">Projects</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    className="text-3xl font-bold text-[#4F6DFF]"
                  >
                    3
                  </motion.p>
                  <p className="text-xs text-[#A7B1D8] mt-1">Years Coding</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-3xl font-bold text-[#4F6DFF]"
                  >
                    15+
                  </motion.p>
                  <p className="text-xs text-[#A7B1D8] mt-1">Technologies</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-[24px] p-6 lg:col-span-3 group hover:border-white/20 transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white font-['Sora'] mb-6">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className="text-xs text-[#A7B1D8]">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                      className="h-full rounded-full bg-gradient-to-r from-[#4F6DFF] to-[#7B8FFF]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  );
}
