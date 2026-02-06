'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  hasAvatar?: boolean;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Do you work on freelance or remote projects?',
    answer: 'Yes, I am available for freelance and remote projects. I work with clients globally and am comfortable collaborating across different time zones.',
    hasAvatar: false,
  },
  {
    id: 2,
    question: 'What technologies do you work with?',
    answer: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    hasAvatar: true,
  },
  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer: 'Absolutely! I specialize in converting design files from Figma and Sketch into pixel-perfect, responsive code. I ensure all interactions and animations are implemented as designed.',
    hasAvatar: false,
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer: 'Yes, I have extensive experience working with backend developers and cross-functional teams. I ensure seamless integration between frontend and backend systems.',
    hasAvatar: false,
  },
  {
    id: 5,
    question: 'Are you available for full-time roles?',
    answer: 'I am open to discussing full-time opportunities that align with my skills and career goals. Feel free to reach out to discuss potential roles.',
    hasAvatar: false,
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(2);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
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
    <section id="faq" className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-[140px]">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-2 leading-tight">
              Still Got Questions?
            </h2>
            <p className="text-gray-400 text-base md:text-lg">
              I've listed answers to questions I often get as a frontend developer.
            </p>
          </motion.div>

          {/* Navigation Buttons - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-4"
          >
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-[106px] h-[48px] md:w-[120px] md:h-[56px] rounded-lg border border-white/20 flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? 'hover:bg-white/5 hover:border-white/30 text-white' 
                  : 'opacity-30 cursor-not-allowed text-gray-600'
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
                  ? 'bg-white text-black hover:bg-gray-100 border-white' 
                  : 'bg-white/10 text-gray-600 cursor-not-allowed border-white/20'
              }`}
              aria-label="Next"
            >
              <span className="text-base md:text-lg font-medium">Next</span>
            </button>
          </motion.div>
        </div>

        {/* FAQ Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mr-6 md:-mr-[140px]"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex-shrink-0 snap-start transition-all duration-500 ${
                expandedId === faq.id
                  ? 'w-full md:w-[379px]'
                  : 'w-full md:w-[252px]'
              } ${
                index < 4 
                  ? '' 
                  : 'pr-6 md:pr-[140px]'
              }`}
            >
              <div
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className={`relative border rounded-lg p-6 md:p-8 cursor-pointer transition-all duration-500 flex flex-col ${
                  expandedId === faq.id
                    ? 'bg-[#14b8a6] border-[#14b8a6] h-[466px]'
                    : 'bg-black border-white/10 hover:border-white/20 h-[466px]'
                }`}
              >
                {/* Message Icon */}
                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src="/images/Message.png"
                      alt="Message"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-1" />

                {/* Content at Bottom */}
                <div className="space-y-4 md:space-y-6 pr-12">
                  {/* Avatar - Only show when expanded and hasAvatar is true */}
                  <AnimatePresence>
                    {expandedId === faq.id && faq.hasAvatar && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden"
                      >
                        <Image
                          src="/images/Profile.png"
                          alt="Profile"
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Question */}
                  <h3 className={`text-xl md:text-2xl font-bold leading-tight transition-colors ${
                    expandedId === faq.id ? 'text-white' : 'text-white'
                  }`}>
                    {faq.question}
                  </h3>

                  {/* Answer - Only show when expanded */}
                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-white/90 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
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