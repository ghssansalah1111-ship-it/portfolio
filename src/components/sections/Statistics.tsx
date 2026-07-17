"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 2, text, suffix = "" }: { from?: number, to: number, duration?: number, text: string, suffix?: string })  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-6xl font-bold text-white mb-2">
       {count}
      </div>
      <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
        {text}
      </div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 relative bg-primary/5 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-white/10">
          <Counter to={5} text="Happy Clients" />
          <Counter to={99} suffix="%" text="Client Satisfaction" />
          <Counter to={20} text="Videos Created" />
        </div>
      </div>
    </section>
  );
}
