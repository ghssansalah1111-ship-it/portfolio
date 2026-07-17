"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Marketing Director at TechFlow",
    text: "Ghassan's animations completely transformed our social media presence. His ability to distill complex ideas into engaging visual stories is unmatched.",
  },
  {
    name: "Michael Chen",
    role: "Founder of Lumina",
    text: "Working with Ghassan was an absolute pleasure. He delivered our brand video ahead of schedule, and the quality far exceeded our expectations.",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Lead at StudioX",
    text: "The level of detail and smooth motion in his work is incredible. Ghassan is a true professional and an artist.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Don't just take my word for it. Here is what my clients have to say.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/5 relative"
            >
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic leading-relaxed text-lg">
                "{item.text}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
