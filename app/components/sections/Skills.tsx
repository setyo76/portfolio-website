'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', percentage: 100, icon: '/images/html.png' },
  { name: 'CSS', percentage: 90, icon: '/images/css.png' },
  { name: 'Javascript', percentage: 90, icon: '/images/javascript.png' },
  { name: 'Typescript', percentage: 80, icon: '/images/ts.png' },
  { name: 'Sequalize', percentage: 80, icon: '/images/sequalize.png' },
  { name: 'Mongo DB', percentage: 75, icon: '/images/mongo.png' },
];

function AnimatedPercentage({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 50,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}%`;
      }
    });
  }, [springValue]);

  return <span ref={ref}>0%</span>;
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 0.2,
      },
    }),
  };

  return (
    <section className='w-full bg-black py-16 md:py-24 lg:py-32'>
      <div id="skills" className='container mx-auto px-6 md:px-[140px]'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          
          {/* Left Section - Text Content */}
          <div className='w-full lg:w-[367px] flex flex-col justify-between'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-6'
            >
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                Tools I Use to Build
              </h2>
              <p className='text-[#8892b0] text-lg md:text-xl leading-relaxed'>
                From code to design — here's the tech that helps me turn ideas
                into real products.
              </p>
            </motion.div>

            {/* Button Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='pt-8 lg:pt-0 w-full'
            >
              <Button icon variant='primary' className='w-full'>
                Send Message
              </Button>
            </motion.div>
          </div>

          {/* Right Section - Skills List */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex-1 lg:w-[642px] space-y-0 relative'
          >
            {/* Vertical White Border for first 3 items */}
            <div className='absolute left-0 top-0 bottom-[calc(60%+1px)] w-[2px] bg-white' />

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className='group relative'
              >
                <div className='flex items-center justify-between py-5 border-b border-[#1d2d50] hover:border-[#64ffda] transition-colors duration-300 pl-6'>
                  <div className='flex items-center gap-4'>
                    <div className='relative w-9 h-9 flex items-center justify-center'>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={36}
                        height={36}
                        className='object-contain'
                      />
                    </div>
                    <span className='text-white font-medium text-lg group-hover:text-[#64ffda] transition-colors duration-300'>
                      {skill.name}
                    </span>
                  </div>
                  <span className='text-white font-bold text-xl'>
                    <AnimatedPercentage value={skill.percentage} />
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='relative h-[1px] bg-[#1d2d50]/30 -mt-[1px] ml-6'>
                  <motion.div
                    custom={skill.percentage}
                    variants={barVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='absolute top-0 left-0 h-full bg-gradient-to-r from-[#00d9ff] to-[#64ffda]'
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}