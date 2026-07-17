"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "After Effects", level: 95 },
  { name: "Premiere Pro", level: 90 },
  { name: "Illustrator", level: 85 },
  { name: "Photoshop", level: 80 },
  { name: "Motion Design", level: 95 },
  { name: "Storyboarding", level: 85 },
];

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              My <span className="text-gradient">Arsenal</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-10 leading-relaxed"
            >
              I utilize industry-standard tools to craft high-quality animations and designs. My proficiency in these applications allows me to seamlessly transition from concept to final render without compromising on quality or creativity.
            </motion.p>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, delay: 0.1 * index, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
