'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Image from 'next/image';

const marqueeItems = [
  "FRONTEND DEVELOPER",
  "UI/UX DESIGNER",
  "REACT SPECIALIST",
  "WEB DEVELOPER",
  "JAVASCRIPT EXPERT",
];

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full relative min-h-screen flex items-start overflow-hidden bg-transparent">
        <div className="container mx-auto px-6 md:px-[140px] relative h-full">
          
          {/* Mobile Layout: ID Card First, Then Text */}
          <div className="md:hidden flex flex-col items-start pt-[80px]">
            {/* ID Card - Mobile - Centered and Higher */}
            <motion.div 
              className="relative w-[200px] h-[394px] mb-8 mx-auto"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Asset 1: ID Card Base */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/images/image 12.png" 
                  alt="ID Card Base"
                  fill
                  className="object-contain object-top"
                  priority
                />
              </div>

              {/* Asset 2: Teal Brush Stroke */}
              <div className="absolute top-[52%] left-[3%] w-[90%] h-[88px] z-10">
                <Image 
                  src="/images/Vector.png" 
                  alt="Decorative Stroke"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Asset 3: Portrait */}
              <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-[92%] h-[80%] z-20">
                <Image 
                  src="/images/Harmonious Purple Palette - Candid Gentleman Portrait 1.png" 
                  alt="Edwin Anderson"
                  fill
                  className="object-contain object-bottom scale-110"
                />
              </div>
            </motion.div>

            {/* Text Content - Mobile - Left Aligned */}
            <motion.div 
              className="flex flex-col items-start text-left w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-400 text-[14px] mb-4 font-medium">
                Hi, I&apos;m Edwin Anderson
              </span>
              
              <div className="flex flex-col mb-6">
                <div className="flex items-center gap-2">
                  <h1 className="text-[44px] font-bold text-white leading-none tracking-tighter">
                    FRONT
                  </h1>
                  <div className="relative w-[70px] h-[44px] mb-1">
                    <Image 
                      src="/images/END.png" 
                      alt="END Typography"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h1 className="text-[44px] font-bold text-white leading-[0.85] tracking-tighter">
                  DEVELOPER
                </h1>
              </div>
              
              <p className="text-gray-400 text-[14px] max-w-[400px] leading-relaxed mb-8">
                Passionate about frontend development, I focus on crafting digital products that are visually polished, performance-optimized, and deliver a consistent experience across all platforms.
              </p>
              
              <Button className="w-full bg-[#14b8a6] hover:bg-[#0d9488] text-white px-6 py-3 rounded-sm flex items-center justify-center gap-3 transition-all text-sm mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Desktop Layout: Text Left, ID Card Right */}
          <div className="hidden md:grid grid-cols-2 gap-0 items-start">
            <motion.div 
              className="flex flex-col mt-[227px] z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gray-400 text-[18px] mb-6 font-medium">
                Hi, I&apos;m Edwin Anderson
              </span>
              
              <div className="flex flex-col mb-8">
                <div className="flex items-center gap-4">
                  <h1 className="text-[96px] font-bold text-white leading-none tracking-tighter">
                    FRONT
                  </h1>
                  <div className="relative w-[161px] h-[100px] mb-3">
                    <Image 
                      src="/images/END.png" 
                      alt="END Typography"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                </div>
                <h1 className="text-[96px] font-bold text-white leading-[0.8] tracking-tighter">
                  DEVELOPER
                </h1>
              </div>
              
              <p className="text-gray-400 text-[18px] max-w-[540px] leading-relaxed mb-10">
                Passionate about frontend development, I focus on crafting digital products that are visually polished, performance-optimized, and deliver a consistent experience across all platforms.
              </p>
              
              <div className="flex mb-8">
                <Button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-4 rounded-sm flex items-center gap-3 transition-all text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop ID Card - Positioned Absolutely */}
        <div className="hidden md:block absolute right-[5%] lg:right-[10%] top-0 h-full pointer-events-none">
          <motion.div 
            className="relative w-[341px] h-[671px] z-20 pointer-events-auto"
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          >
            {/* Asset 1: ID Card Base */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/image 12.png" 
                alt="ID Card Base"
                fill
                className="object-contain object-top"
                priority
              />
            </div>

            {/* Asset 2: Teal Brush Stroke */}
            <div className="absolute top-[52%] left-[3%] w-[90%] h-[150px] z-10">
              <Image 
                src="/images/Vector.png" 
                alt="Decorative Stroke"
                fill
                className="object-contain"
              />
            </div>

            {/* Asset 3: Portrait */}
            <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 w-[92%] h-[80%] z-20">
              <Image 
                src="/images/Harmonious Purple Palette - Candid Gentleman Portrait 1.png" 
                alt="Edwin Anderson"
                fill
                className="object-contain object-bottom scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section - Integrated */}
      <div 
        className="relative w-full py-6 md:py-10 overflow-hidden border-y border-white/5"
        style={{ backgroundColor: '#149bb0' }}
      >
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                {marqueeItems.map((text, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-[32px] md:text-[64px] font-bold tracking-tighter text-transparent stroke-text px-6 md:px-12">
                      {text}
                    </span>
                    
                    <div className="relative w-6 h-6 md:w-10 md:h-10 mx-2 md:mx-4">
                      <Image 
                        src="/images/Star.png" 
                        alt="Star Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}