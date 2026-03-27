"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-12 xl:px-24 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-8">Profil</h2>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
            Rigoureux, avec un bon esprit d'analyse et de synthèse, et aimant travailler en équipe. Je suis très passionné par le domaine de l'informatique, de l'intelligence artificielle et du développement.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full flex flex-col gap-6 bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-medium text-white mb-2">Contact</h3>
          <div className="flex flex-col gap-4 text-white/60">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">📍</span>
              <span className="text-lg">Dijon, France</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">✉️</span>
              <a href="mailto:fadileyoussef8@gmail.com" className="text-lg hover:text-white transition-colors">fadileyoussef8@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">📱</span>
              <a href="tel:0753578198" className="text-lg hover:text-white transition-colors">07 53 57 81 98</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
