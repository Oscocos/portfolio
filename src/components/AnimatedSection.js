'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f172a] p-8 rounded shadow border border-[#312e81] text-slate-200"
      style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      }}
    >
      <h3 className="text-3xl font-bold mb-4 text-purple-300 drop-shadow-[0_0_8px_rgba(167,139,250,0.2)]">
        {title}
      </h3>
      <div>{children}</div>
    </motion.section>
  );
}