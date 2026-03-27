"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: Fades out quickly (0 -> 0.15)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  
  // Section 2: Fades in at 0.25, peaks at 0.35, fades out at 0.45
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  // Section 3: Fades in at 0.55, peaks at 0.65, fades out at 0.8
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.9], [100, -100]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-center max-w-7xl mx-auto px-6">
      
      {/* SECTION 1 */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center py-20"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-2xl">
          Youssef Fadile
        </h1>
        <p className="text-xl md:text-3xl text-white/80 tracking-wide font-light drop-shadow-md">
          Master 1 BDIA
        </p>
      </motion.div>

      {/* SECTION 2 */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-start justify-center pl-6 md:pl-24 py-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl leading-tight text-white drop-shadow-2xl">
          Data, AI & <span className="text-white/60 font-light italic">Software Engineering.</span>
        </h2>
      </motion.div>

      {/* SECTION 3 */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-end justify-center pr-6 md:pr-24 text-right py-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-3xl leading-tight text-white drop-shadow-2xl">
          Rigoureux, <span className="text-white/60 font-light italic">analytique</span><br/> et <span className="text-white/60 font-light italic">passionné.</span>
        </h2>
      </motion.div>
      
    </div>
  );
}
