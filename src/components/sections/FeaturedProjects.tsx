"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Video 1",
    category: "Motion Graphics",
    description: "Motion graphics project.",
    image: "/images/project_1_motion_1784259159538.jpg",
    video: "/videos/vid-1.mp4",
  },
  {
    id: 2,
    title: "Video 2",
    category: "Motion Graphics",
    description: "Motion graphics project.",
    image: "/images/project_3_commercial_1784259178746.jpg",
    video: "/videos/vid-2.mp4",
  },
  {
    id: 3,
    title: "Video 3",
    category: "Motion Graphics",
    description: "Motion graphics project.",
    image: "/images/project_4_reels_1784259186625.jpg",
    video: "/videos/vid-3.mp4",
  },
  {
    id: 4,
    title: "Video 4",
    category: "Motion Graphics",
    description: "Motion graphics project.",
    image: "/images/project_1_motion_1784259159538.jpg",
    video: "/videos/vid-4.mp4",
  },
  {
    id: 5,
    title: "Video 5",
    category: "Motion Graphics",
    description: "Motion graphics project.",
    image: "/images/project_3_commercial_1784259178746.jpg",
    video: "/videos/vid-5.mp4",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A selection of my best work across various disciplines of motion design.
            </p>
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden glass border border-white/5 cursor-pointer"
              >
                <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      poster={project.image}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-default"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-black transition-colors z-[101]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    autoPlay
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
