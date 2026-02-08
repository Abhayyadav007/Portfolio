import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, School, Trophy, BookOpen, Target, Code } from 'lucide-react';
import { useMotionValue, useSpring, useTransform } from "framer-motion";
//
// const skills = [
//   { name: 'React', level: 90 },
//   { name: 'TypeScript', level: 85 },
//   { name: 'Node.js', level: 80 },
//   { name: 'Javascript', level: 75 },
//   { name: 'Prisma', level: 85 },
//   { name: 'MongoDB', level: 80 },
//   { name: 'Postgress', level: 75 },
//   { name: 'Express', level: 90 },
//   { name: 'Nextjs', level: 80 },
//   { name: 'Mongoose', level: 90 },
// ];
//
export function About() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);


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
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="micro-label mb-4">ABOUT ME</p>
        <motion.div
          variants={itemVariants}
          // className="glass-card rounded-[24px] p-6 lg:col-span-3 group hover:border-white/20 transition-all duration-500"
          className="glass-card rounded-[28px] p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          <h1 className="text-2xl">
            Hi I am Abhay Kumar Yadav

          </h1>

          <br />
          <p className="text-[#A7B1D8] leading-relaxed">
            As a Computer Science and Engineering student, I am deeply interested in exploring new technologies and using them to build meaningful digital solutions. I enjoy transforming ideas into real-world projects through programming, problem-solving, and continuous experimentation. My learning journey is driven by curiosity, creativity, and a strong desire to improve both my technical and analytical skills.
          </p>
          <br></br>
          <p className="text-[#A7B1D8] leading-relaxed">
            I actively work on developing my knowledge in areas such as software development, data structures, and modern programming tools, while also focusing on writing clean, efficient, and user-friendly code. Beyond academics, I like to challenge myself with new projects, learn from online resources, and stay updated with the latest trends in technology.
          </p>
          <br></br>
          <p className="text-[#A7B1D8] leading-relaxed">
            My goal is to grow into a skilled and responsible software engineer who can contribute to innovative products, solve real-world problems, and create technology that makes a positive impact.
          </p>
        </motion.div>
        <br></br>
        <br></br>
        <br></br>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >

          <h2 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white font-['Sora']">
            Education & <span className="accent-gradient">Background</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Large Card - Current Education */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-[24px] p-8 lg:col-span-2 lg:row-span-2 group hover:border-white/20 transition-all duration-500 "

          >
            <div className="flex items-start gap-6 h-full">
              <div className="p-4 rounded-2xl bg-[#4F6DFF]/10 border border-[#4F6DFF]/20">
                <GraduationCap className="w-8 h-8 text-[#4F6DFF]" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-sm text-[#A7B1D8] mb-1">Currently Pursuing</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-['Sora']">
                    B.Tech Computer Science
                  </h3>
                  <p className="text-lg text-[#4F6DFF] mt-1">
                    Lovely Professional University
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#4F6DFF]/10 text-[#4F6DFF] text-sm font-medium">
                    3rd Year
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[#A7B1D8] text-sm">
                    Punjab, India
                  </span>
                </div>
                <p className="text-[#A7B1D8] leading-relaxed">
                  I am passionate about building scalable and efficient web applications that deliver seamless performance and meaningful user value. My primary interest lies in creating intuitive, user-centered digital experiences that combine strong functionality with clean and modern design. I enjoy transforming ideas into real-world solutions through thoughtful development, structured problem-solving, and continuous experimentation with new technologies.

                  Currently, I am focused on expanding my knowledge in full-stack development, where I work with both frontend and backend technologies to understand how complete web systems are designed, developed, and deployed. I am also exploring system design principles to learn how large-scale applications maintain reliability, performance, and scalability in real-world environments. Alongside this, I actively study modern frontend frameworks to build responsive, accessible, and visually engaging user interfaces.

                  I am driven by curiosity and a commitment to continuous learning, regularly improving my technical skills through projects, documentation, and hands-on practice. My long-term goal is to grow into a skilled software developer who can contribute to innovative products, solve complex problems, and create technology that positively impacts users and communities.                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                    <Code className="w-5 h-5 text-[#4F6DFF] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">3+</p>
                    <p className="text-xs text-[#A7B1D8]">Projects</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                    <BookOpen className="w-5 h-5 text-[#4F6DFF] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">3rd</p>
                    <p className="text-xs text-[#A7B1D8]">Year</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.02]">
                    <Target className="w-5 h-5 text-[#4F6DFF] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-xs text-[#A7B1D8]">Commitment</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 12th Grade Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-[24px] p-6 group hover:border-white/20 transition-all duration-500"
          >
            <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">
              <School className="w-6 h-6 text-[#A7B1D8]" />
            </div>
            <p className="text-sm text-[#A7B1D8] mb-1">Higher Secondary</p>
            <h3 className="text-xl font-bold text-white font-['Sora'] mb-1">
              Jindal Vidya Mandir
            </h3>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-[#4F6DFF]">80%</span>
              <span className="text-sm text-[#A7B1D8]">12th Grade</span>
            </div>
            <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">
              <Trophy className="w-6 h-6 text-[#A7B1D8]" />
            </div>
            <p className="text-sm text-[#A7B1D8] mb-1">Secondary School</p>
            <h3 className="text-xl font-bold text-white font-['Sora'] mb-1">
              Jindal Vidya Mandir
            </h3>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-3xl font-bold text-[#4F6DFF]">87%</span>
              <span className="text-sm text-[#A7B1D8]">10th Grade</span>
            </div>

          </motion.div>

          {/* 10th Grade Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-[24px] p-6 group hover:border-white/20 transition-all duration-500"
          >
            <div>

              <p className="text-sm text-[#A7B1D8] mb-1">Hobbies</p>
              <br />
              <h3 className="text-xl font-bold text-white font-['Sora'] mb-1">
                Coding & Personal Projects
              </h3>
              <p className="text-sm text-[#A7B1D8] mb-1">
                I enjoy building small applications and experimenting with new programming concepts to strengthen my problem-solving and development skills.
              </p>
              <br />
              <h3 className="text-xl font-bold text-white font-['Sora'] mb-1">
                Music
              </h3>
              <p className="text-sm text-[#A7B1D8] mb-1">
                Listening to music helps me stay focused, creative, and balanced alongside my technical learning.              </p>
            </div>
          </motion.div>

          {/* Skills Card */}
        </motion.div>
      </div>
    </section>
  );
}
