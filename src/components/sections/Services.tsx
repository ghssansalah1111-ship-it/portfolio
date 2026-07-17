"use client";

import { motion } from "framer-motion";
import { 
  FiFilm, FiPlayCircle, FiAperture, FiSmartphone, 
  FiYoutube, FiLayout, FiScissors, FiFeather 
} from "react-icons/fi";

const services = [
  { icon: <FiFilm />, title: "Motion Graphics" },
  { icon: <FiPlayCircle />, title: "Explainer Videos" },
  { icon: <FiSmartphone />, title: "Social Media Videos" },
  { icon: <FiYoutube />, title: "Reels Editing" },
  { icon: <FiLayout />, title: "UI Animation" },
  { icon: <FiScissors />, title: "Video Editing" },
  { icon: <FiFeather />, title: "Visual Storytelling" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Comprehensive motion design solutions tailored to elevate your brand.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(80, 199, 185, 0.1)",
                borderColor: "rgba(80, 199, 185, 0.3)"
              }}
              className="glass p-8 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-background/50 flex items-center justify-center mb-6 text-2xl text-accent group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}
