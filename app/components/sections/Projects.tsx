'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Portfolio {
  id: number;
  title: string;
  year: string;
  image: string;
}

const portfolios: Portfolio[] = [
  {
    id: 1,
    title: 'Portfolio 1',
    year: '2025',
    image: '/images/portofolio 1.png',
  },
  {
    id: 2,
    title: 'Portfolio 2',
    year: '2025',
    image: '/images/portofolio 2.png',
  },
  {
    id: 3,
    title: 'Portfolio 3',
    year: '2025',
    image: '/images/portofolio 3.png',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
      }
    },
  };

  return (
    <section id="projects" className="w-full bg-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-[140px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4 leading-tight">
            Bridging Design and Development
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            These are real projects where I implemented frontend interfaces with precision and attention to detail.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {portfolios.map((portfolio) => (
            <motion.div
              key={portfolio.id}
              variants={cardVariants}
              className="group"
            >
              {/* Portfolio Card */}
              <div className="relative w-full h-[457px] rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Portfolio Info */}
              <div className="mt-5 space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {portfolio.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {portfolio.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}