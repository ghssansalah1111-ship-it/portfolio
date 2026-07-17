"use client";

import { motion } from "framer-motion";
import { FiSearch, FiLayout, FiPlay, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding your brand, goals, and target audience to lay a solid foundation.",
    icon: <FiSearch className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "Storyboard",
    description: "Creating a visual blueprint that outlines the flow and structure of the animation.",
    icon: <FiLayout className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Animate",
    description: "Bringing the designs to life with smooth motion, transitions, and dynamic effects.",
    icon: <FiPlay className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "Deliver",
    description: "Finalizing the project with sound design and delivering high-quality files.",
    icon: <FiCheckCircle className="w-6 h-6" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Creative <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            A structured workflow ensuring creativity meets precision at every stage.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass border-2 border-white/10 flex items-center justify-center mb-6 relative group-hover:border-accent transition-colors duration-300">
                  <span className="text-gray-400 group-hover:text-accent transition-colors">
                    {step.icon}
                  </span>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-black font-bold flex items-center justify-center text-sm shadow-[0_0_15px_rgba(80,199,185,0.5)]">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
