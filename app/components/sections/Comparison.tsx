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
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 relative overflow-hidden">
      
      {/* Grid Background with Glow Effect (Bottom Left) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Grid Lines */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #14b8a6 1px, transparent 1px),
              linear-gradient(to bottom, #14b8a6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Plus Signs Markers */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern 
              id="plus-pattern-comparison" 
              x="0" 
              y="0" 
              width="160" 
              height="160" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 0 -6 L 0 6 M -6 0 L 6 0" 
                fill="none" 
                stroke="#14b8a6" 
                strokeWidth="1.5"
                transform="translate(80, 80)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plus-pattern-comparison)" />
        </svg>
        
        {/* Radial Gradient - Glow from Bottom Left */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at 0% 100%, 
              rgba(21, 154, 175, 0.5) 0%, 
              rgba(20, 184, 166, 0.1) 60%, 
              transparent 70%
            )`
          }}
        />

        {/* Dark Overlay for contrast */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at 0% 100%,
              transparent 20%,
              rgba(0, 0, 0, 0.4) 40%,
              rgba(0, 0, 0, 1) 70%
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-[140px] relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Not Your Typical Frontend Developer
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            I care about how it looks, how it works, and how it feels — all at once
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-black border border-white/10 rounded-lg overflow-hidden py-6 md:py-8"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[2.5fr_0.8fr_0.8fr] md:grid-cols-3 border-b border-white/10">
            <div className="px-4 py-5 md:px-8 md:py-6">
              <h3 className="text-base md:text-xl font-bold text-white">Skill</h3>
            </div>
            <div className="px-3 py-5 md:px-8 md:py-6 bg-[#14b8a6]/20 border-x border-white/10 text-center">
              <h3 className="text-base md:text-xl font-bold text-white">With<br className="md:hidden" /> Me</h3>
            </div>
            <div className="px-3 py-5 md:px-8 md:py-6 text-center">
              <h3 className="text-base md:text-xl font-bold text-white">Other</h3>
            </div>
          </div>

          {/* Table Rows */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={rowVariants}
              className="grid grid-cols-[2.5fr_0.8fr_0.8fr] md:grid-cols-3 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300"
            >
              {/* Skill Name */}
              <div className="px-4 py-4 md:px-8 md:py-6 flex items-center">
                <span className="text-white text-xs md:text-base leading-tight">{skill.name}</span>
              </div>

              {/* With Me Column */}
              <div className="px-3 py-4 md:px-8 md:py-6 bg-[#14b8a6]/20 border-x border-white/10 flex items-center justify-center">
                {skill.withMe && (
                  <div className="w-6 h-6 md:w-10 md:h-10 relative flex-shrink-0">
                    <Image
                      src="/images/checklist.png"
                      alt="Check"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Other Column */}
              <div className="px-3 py-4 md:px-8 md:py-6 flex items-center justify-center">
                {!skill.other && (
                  <div className="w-6 h-6 md:w-10 md:h-10 relative flex-shrink-0">
                    <Image
                      src="/images/cross.png"
                      alt="Cross"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}