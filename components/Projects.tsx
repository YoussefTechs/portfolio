"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "PolyHome",
    category: "Mobile App (Android/Kotlin)",
    description: "Application Domotique Android. Gestion d'une maison connectée via API.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Rugo-Tech",
    category: "Web App (Django/JS/Blender)",
    description: "Etude de rugosité des courbes et surfaces.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Modélisation 3D",
    category: "Infographie (OpenGL)",
    description: "Modélisation et animation d'un lapin en 3D.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Jeu '6 qui prend'",
    category: "C/C++/Réseaux",
    description: "Jeu développé avec architecture serveur-client et bash.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Gestion des contacts",
    category: "Desktop App (C++/QtCreator)",
    description: "Application de gestion orientée objet connectée à une base de données.",
    color: "from-gray-500/20 to-slate-500/20",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 xl:px-24 z-10 lg:min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Projets</h2>
          <hr className="mt-8 border-white/10" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 cursor-pointer shadow-2xl`}
            >
              {/* Subtle gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl`} />
              
              <div className="flex justify-between items-start z-10 w-full">
                <span className="text-white/50 uppercase tracking-widest text-xs md:text-sm font-semibold">{project.category}</span>
              </div>
              
              <div className="z-10 flex flex-col items-start w-full">
                <h3 className="text-3xl font-semibold tracking-tight text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 group-hover:-translate-y-2 transition-transform duration-500 delay-75">{project.description}</p>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 transform opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shrink-0 shadow-lg backdrop-blur-md">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
