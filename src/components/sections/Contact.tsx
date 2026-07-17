"use client";

import { motion } from "framer-motion";
import { FiMail, FiInstagram, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
          
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Let's <span className="text-gradient">Connect</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg mb-10"
              >
                Have a project in mind? Let's talk about how we can bring your ideas to life through motion.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <a href="mailto:ghssansalah1111@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-accent/50 transition-colors">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">ghssansalah1111@gmail.com</span>
                </a>
                
                <div className="flex gap-4 pt-4">
                  <a href="https://www.instagram.com/gh_sa992/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 text-white">
                    <FiInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://wa.me/9647772665406" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 text-white">
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.form 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell me about your project" 
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black font-bold text-lg rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-300"
              >
                Send Message
                <FiSend />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
