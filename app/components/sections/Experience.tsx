'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

interface Experience {
  id: number;
  title: string;
  period: string;
  description: string;
  company: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    period: '2025- Present',
    description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Airbnb',
    logo: '/images/airbnb.png',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    period: '2025- Present',
    description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Dribbble',
    logo: '/images/dribbble.png',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    period: '2025- Present',
    description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    company: 'Zoom',
    logo: '/images/zoom.png',
  },
];

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate scroll progress
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-[140px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4 leading-tight">
            My Journey in Tech
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl">
            From small gigs to real-world challenges — each experience helped me grow as a builder and problem-solver.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Scrollable Cards */}
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-12 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory -mr-6 md:-mr-[140px]"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex-shrink-0 snap-start ${
                  index < 2 
                    ? 'w-full md:w-[564px]' 
                    : 'w-full md:w-[564px] pr-6 md:pr-[140px]'
                }`}
              >
                {/* Card */}
                <div className="relative h-[336px] md:h-[480px] border border-white/10 rounded-lg p-5 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300 group">
                  
                  {/* Teal Border Left - HANYA DARI HEADING SAMPAI TAHUN */}
                  <div className="absolute left-0 top-5 md:top-8 w-1 bg-[#14b8a6] rounded-l-lg h-[72px]" />
                  
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        {exp.period}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex-1 flex items-center py-6">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Company Logo */}
                  <div className="flex items-center h-16">
                    <div className="relative h-12 w-auto">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={120}
                        height={48}
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Progress Bar & Navigation */}
          <div className="mt-8 flex flex-col gap-6">
            
            {/* Progress Bar - SEBATAS LEBAR CARD DAN WARNA PUTIH */}
            <div className="w-full md:w-[564px] h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-[106px] h-[48px] md:w-[120px] md:h-[56px] rounded-lg border transition-all ${
                  canScrollLeft 
                    ? 'bg-black border-white/20 text-white hover:border-white/30' 
                    : 'bg-black border-white/10 text-gray-600 opacity-30 cursor-not-allowed'
                }`}
                aria-label="Previous"
              >
                <span className="text-base md:text-lg font-medium">Prev</span>
              </button>
              
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-[106px] h-[48px] md:w-[120px] md:h-[56px] rounded-lg border transition-all ${
                  canScrollRight 
                    ? 'bg-black border-white/20 text-white hover:border-white/30' 
                    : 'bg-black border-white/10 text-gray-600 opacity-30 cursor-not-allowed'
                }`}
                aria-label="Next"
              >
                <span className="text-base md:text-lg font-medium">Next</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}