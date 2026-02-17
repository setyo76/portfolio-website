'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  withMe: boolean;
  other: boolean;
}

const skills: Skill[] = [
  { name: 'React Expert', withMe: true, other: false },
  { name: 'Pixel Perfect', withMe: true, other: false },
  { name: 'TypeScript Proficiency', withMe: true, other: false },
  { name: 'Clean, Maintainable Code', withMe: true, other: false },
  { name: 'Performance Optimization', withMe: true, other: false },
  { name: 'Responsive Website', withMe: true, other: false },
  { name: 'UI Design Proficiency (Figma)', withMe: true, other: false },
];

export default function Comparison() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, #14b8a6 1px, transparent 1px), linear-gradient(to bottom, #14b8a6 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-[140px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Not Your Typical Frontend Developer
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-black border border-white/10 rounded-lg overflow-hidden"
        >
          {/* Table Header - Menggunakan Persentase Tetap agar Lurus Sempurna */}
          <div className="flex border-b border-white/10 items-stretch bg-black">
            <div className="w-[50%] md:w-[40%] px-4 py-5 md:px-8 md:py-6 flex items-center">
              <h3 className="text-[10px] md:text-xl font-bold text-white uppercase tracking-tighter md:tracking-normal">Skill</h3>
            </div>
            <div className="w-[25%] md:w-[30%] px-2 py-5 bg-[#14b8a6]/20 border-x border-white/10 flex items-center justify-center text-center">
              <h3 className="text-[10px] md:text-xl font-bold text-white leading-tight">With Me</h3>
            </div>
            <div className="w-[25%] md:w-[30%] px-2 py-5 flex items-center justify-center text-center">
              <h3 className="text-[10px] md:text-xl font-bold text-white uppercase tracking-tighter md:tracking-normal">Other</h3>
            </div>
          </div>

          {/* Table Rows */}
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={rowVariants}
              className="flex border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300 items-stretch"
            >
              {/* Skill Name - W-[50%] menjaga lebar kolom kiri tetap dominan */}
              <div className="w-[50%] md:w-[40%] px-4 py-4 md:px-8 md:py-6 flex items-center">
                <span className="text-white text-[10px] sm:text-xs md:text-base font-medium leading-tight break-words">
                  {skill.name}
                </span>
              </div>

              {/* With Me Column - W-[25%] memastikan garis border tegak lurus */}
              <div className="w-[25%] md:w-[30%] px-2 py-4 bg-[#14b8a6]/20 border-x border-white/10 flex items-center justify-center">
                <div className="w-5 h-5 md:w-9 md:h-9 relative flex-shrink-0">
                  <Image
                    src="/images/checklist.png"
                    alt="Check"
                    fill
                    sizes="(max-width: 768px) 20px, 36px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Other Column */}
              <div className="w-[25%] md:w-[30%] px-2 py-4 flex items-center justify-center">
                <div className="w-5 h-5 md:w-9 md:h-9 relative flex-shrink-0">
                  <Image
                    src="/images/cross.png"
                    alt="Cross"
                    fill
                    sizes="(max-width: 768px) 20px, 36px"
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}