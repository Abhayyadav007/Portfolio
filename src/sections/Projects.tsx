import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowUpRight, ExternalLink, MousePointer2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Virtual Art Exhibition & Auction Platform',
    description: "Conceptualised, designed, and developed a complete Virtual Art Exhibition platform allowing users to upload, display and sell digital artwork in an interactive online environment.• Implement core auction logic and a secure bidding feature to facilitate transparent and competitiveart sales.• Designed the back-end infrastructure to handle user registration, artwork uploads and gallery management.• Created a new e-commerce channel for artists, driving direct sales through a custom bidding interface• Built a responsive UI using Tailwind CSS and Daisy UI, enhancing user engagement and accessibility.",
    image: '/images/Virtul.png',
    tags: ['React', 'Firebase', 'Node.js'],
    featured: true,
    link: 'https://github.com/Abhayyadav007/Virtual-Exhibition',
  },
  {
    id: 2,
    title: 'TakeNote',
    description: 'Developed and deployed a responsive, secure note-taking application using the MERN stack.• Build a user-friendly and aesthetically pleasing interface with React.js that ensures optimal performanceand appearance across different screen sizes• Designed a RESTful API and managed a MongoDB database for efficient, persistent storage and retrieval    of user-generated content• Engineered CRUD functionality, providing users with a seamless interface for note creating and management',
    image: '/images/Takenotes.png',
    tags: ['TypeScript', 'MongoDB', 'Express'],
    featured: false,
    link: 'https://github.com/Abhayyadav007/Note-taking-app',
  },
  {
    id: 3,
    title: 'Tree-Plantation-Tracker',
    description: 'Tree-Plantation-Tracker is a digital platform designed to monitor, visualize, and manage tree planting initiatives. It helps users — including governments, NGOs, environmental groups, and sustainability teams — keep track of tree plantation activities from planning through growth and survival tracking. The system captures data such as plantation counts, locations, species information, and progress over time, and presents this information through interactive dashboards and maps for easy analysis and reporting. By providing real-time insights into how many trees have been planted, where they are located, and how they’re growing, Tree-Plantation-Tracker supports better transparency, accountability, and environmental impact measurement in reforestation and green projects.',
    image: '/images/Tree.png',
    tags: ['JavaScript', 'MongoDB', 'Express', 'Mongoose', 'React'],
    featured: false,
    link: 'https://github.com/Abhayyadav007/Tree-Plantation-Tracker',
  },
];
function ProjectCard({
  project,
  index,
  isInView
}: {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }}
      className="group relative flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px]"
    >
      <motion.div
        className="glass-card rounded-[24px] overflow-hidden h-full cursor-pointer"
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image Container */}
        <div className="relative h-[200px] sm:h-[240px] md:h-[260px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4F6DFF]/20 border border-[#4F6DFF]/30">
              <span className="text-xs font-medium text-[#4F6DFF]">Featured</span>
            </div>
          )}

          {/* View Project Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-[#4F6DFF] flex items-center justify-center shadow-lg shadow-[#4F6DFF]/40">

              <a
                href="https://github.com/Abhayyadav007/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-['Sora'] group-hover:text-[#4F6DFF] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-[#A7B1D8] mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-[#A7B1D8] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <motion.a
            href={project.link}
            className="inline-flex items-center gap-2 text-sm text-[#4F6DFF] font-medium group/link"
            whileHover={{ x: 4 }}
          >
            <span>Explore project</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [sectionRef, isInView] = useInView<HTMLElement>({ threshold: 0.1 });
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Section Header */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="micro-label mb-4">SELECTED WORK</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Sora']">
                Projects that <span className="accent-gradient">define me</span>
              </h2>
              <p className="text-[#A7B1D8] mt-3 max-w-md">
                A collection of projects I've built during my academic journey,
                focusing on solving real campus problems.
              </p>
            </div>

            {/* Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 text-[#A7B1D8]"
            >
              <MousePointer2 className="w-5 h-5" />
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      {/* Hide scrollbar */}
      {/* <style>{` */}
      {/*   .scrollbar-hide::-webkit-scrollbar { */}
      {/*     display: none; */}
      {/*   } */}
      {/*   .scrollbar-hide { */}
      {/*     -ms-overflow-style: none; */}
      {/*     scrollbar-width: none; */}
      {/*   } */}
      {/* `}</style> */}

      <motion.div
        className="flex gap-5 sm:gap-6 px-6 lg:px-8 pb-8"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isInView={isInView}
          />
        ))}
      </motion.div>

      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-8 w-16 sm:w-24 bg-gradient-to-r from-[#070A12] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-8 w-16 sm:w-24 bg-gradient-to-l from-[#070A12] to-transparent pointer-events-none z-10" />

      {/* Featured Project Section */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto mt-16 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass-card-strong rounded-[28px] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-[250px] sm:h-[300px] lg:h-[450px] overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070A12]/80 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <p className="micro-label mb-3">CURRENT PROJECT</p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-['Sora']">
                    {projects[0].title}
                  </h3>
                </div>

                <p className="text-[#A7B1D8] text-base sm:text-lg leading-relaxed">
                  {projects[0].description} This platform connects students
                  looking to buy and sell items within the campus community,
                  featuring real-time chat, secure payments, and verification systems.
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm rounded-full bg-[#4F6DFF]/10 text-[#4F6DFF] border border-[#4F6DFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                  {/* <motion.button */}
                  {/*   className="btn-primary flex items-center justify-center gap-2" */}
                  {/*   whileHover={{ scale: 1.02 }} */}
                  {/*   whileTap={{ scale: 0.98 }} */}
                  {/* > */}
                  {/* </motion.button> */}
                  {/* <motion.button */}
                  {/*   className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors" */}
                  {/*   whileHover={{ scale: 1.02 }} */}
                  {/*   whileTap={{ scale: 0.98 }} */}
                  {/* > */}
                  {/*   Read Case Study */}
                  {/* </motion.button> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
