"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    type: "work",
    role: "Livreur Polyvalent",
    company: "Twins Pizza",
    date: "09/2023 – Présent",
    location: "Dijon, France",
    description: "Livraison et préparation de commandes dans un cadre dynamique.",
  },
  {
    type: "work",
    role: "Stagiaire Qualité",
    company: "Lexus Ingénierie",
    date: "08/2018 – 09/2018",
    location: "Marrakech, Maroc",
    description: "Contrôle qualité et tests manuels dans les applications logicielles.",
  },
  {
    type: "work",
    role: "Stagiaire Commercial",
    company: "Menara Prefa",
    date: "08/2017 – 09/2017",
    location: "Marrakech, Maroc",
    description: "Traitement des commandes et suivi des ventes dans le département commercial.",
  },
];

const education = [
  {
    type: "edu",
    degree: "Master 1 BDIA",
    institution: "UFR Sciences et Techniques",
    date: "2020 – 2025",
    location: "Dijon, France",
  },
  {
    type: "edu",
    degree: "Cycle Préparatoire Systèmes Informatiques et Techniques",
    institution: "ISGA",
    date: "2018 – 2020",
    location: "Marrakech, Maroc",
  },
  {
    type: "edu",
    degree: "Technicien Spécialisé en Gestion des Entreprises",
    institution: "Excel Groupe",
    date: "2016 – 2018",
    location: "Marrakech, Maroc",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-12 xl:px-24 z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          
          {/* EDUCATION TIMELINE */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white inline-flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-2xl">🎓</span>
                Formations
              </h2>
            </motion.div>
            
            <div className="flex flex-col gap-8 relative before:absolute before:inset-y-0 before:left-[23px] before:w-[1px] before:bg-white/10">
              {education.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16"
                >
                  <div className="absolute left-[19px] top-1.5 w-[9px] h-[9px] rounded-full bg-white ring-4 ring-[#121212]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-blue-400 font-medium text-sm tracking-widest uppercase">{item.date}</span>
                    <h3 className="text-2xl font-medium text-white mt-1">{item.degree}</h3>
                    <div className="flex items-center gap-3 text-white/60 text-lg">
                      <span>{item.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white inline-flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-2xl">💼</span>
                Expériences Professionnelles
              </h2>
            </motion.div>
            
            <div className="flex flex-col gap-12 relative before:absolute before:inset-y-0 before:left-[23px] before:w-[1px] before:bg-white/10">
              {experiences.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16 group"
                >
                  <div className="absolute left-[19px] top-1.5 w-[9px] h-[9px] rounded-full bg-white/40 group-hover:bg-white transition-colors ring-4 ring-[#121212]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-emerald-400 font-medium text-sm tracking-widest uppercase">{item.date}</span>
                    <h3 className="text-2xl font-medium text-white mt-1">{item.role}</h3>
                    <div className="flex items-center gap-3 text-white/60 text-lg mb-3">
                      <span>{item.company}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{item.location}</span>
                    </div>
                    <p className="text-white/50 leading-relaxed bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
