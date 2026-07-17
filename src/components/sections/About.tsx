"use client";

import { motion } from "framer-motion";
import { FiMonitor, FiVideo, FiMapPin, FiCpu } from "react-icons/fi";

const highlights = [
  {
    icon: <FiVideo className="w-6 h-6 text-accent" />,
    title: "Visual Storytelling",
    description: "Passionate about crafting narratives through motion.",
  },
  {
    icon: <FiMonitor className="w-6 h-6 text-accent" />,
    title: "Modern Animation",
    description: "Focus on clean, smooth, and engaging designs.",
  },
  {
    icon: <FiCpu className="w-6 h-6 text-accent" />,
    title: "Creative Problem Solver",
    description: "Translating complex ideas into simple visuals.",
  },
  {
    icon: <FiMapPin className="w-6 h-6 text-accent" />,
    title: "Based in Iraq",
    description: "Available for freelance projects globally.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Ghassan Salah</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated Motion Graphics Designer with a keen eye for detail and a passion for bringing ideas to life. 
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With a year of intensive experience in the industry, I specialize in creating premium, minimal, and futuristic animations that captivate audiences. Whether it's an explainer video, a social media reel, or a full-scale commercial, I approach every project with creativity and precision.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-accent/20">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <div>
                <p className="font-semibold text-white">Year of Experience</p>
                <p className="text-sm text-gray-500">Mastering the craft</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
