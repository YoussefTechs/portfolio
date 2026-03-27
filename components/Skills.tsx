"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Langages de Programmation",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "C++", "HTML", "CSS"],
  },
  {
    category: "Développement Web & Mobile",
    items: ["React", "Angular", "Node.js", "Django", "Spring Boot", "Android Kotlin", "Bootstrap", "jQuery", "REST API"],
  },
  {
    category: "Data Science & IA",
    items: ["Pandas", "NumPy", "Matplotlib", "R", "PyTorch", "Power BI"],
  },
  {
    category: "Bases de Données",
    items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"],
  },
  {
    category: "DevOps & Outils",
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux", "Windows", "OpenGL", "UML"],
  },
];

export default function Skills() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-6 md:px-12 xl:px-24 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Compétences</h2>
          <hr className="mt-8 border-white/10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skills.map((skillGroup, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl md:text-2xl font-medium text-white/90">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, j) => (
                  <div 
                    key={j} 
                    className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-sm md:text-base backdrop-blur-md hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
