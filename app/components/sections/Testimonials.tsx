'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  metric?: string;
  title?: string;
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
  isLarge?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    metric: '8X',
    title: 'More users converted after redesign',
    rating: 5,
    text: "Working with Edwin has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    avatar: '/images/people 1.png',
    isLarge: true,
  },
  {
    id: 2,
    title: 'Improved user engagement and sign-ups',
    metric: '3X',
    rating: 5,
    text: "Edwin's expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    avatar: '/images/people 2.png',
  },
  {
    id: 3,
    rating: 5,
    text: "Edwin's work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    avatar: '/images/people 3.png',
  },
  {
    id: 4,
    rating: 5,
    text: "Edwin has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    author: 'Pablo Stanley',
    role: 'Product Manager at Finovate',
    avatar: '/images/people 4.png',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section className="w-full bg-black py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-[140px]">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white mb-4 leading-tight">
            Trusted Voices
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Here's what people say about working with me — across projects, teams, and timelines.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          {/* Left Large Card */}
          <motion.div
            variants={cardVariants}
          >
            {/* Testimonial Card - Large */}
            <div 
              className="relative h-full border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300 group min-h-[751px]"
              style={{
                background: 'linear-gradient(180deg, #134E4A 0%, #000000 100%)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-20">
                <Image
                  src="/images/quote icon.png"
                  alt="Quote"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="space-y-4 md:space-y-6 relative z-10">
                {/* Metric & Title */}
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    {testimonials[0].metric}
                  </h3>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    {testimonials[0].title}
                  </p>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {testimonials[0].text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-6 relative z-10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonials[0].avatar}
                    alt={testimonials[0].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">
                    {testimonials[0].author}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {testimonials[0].role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Top Card - Full Width */}
            <motion.div
              variants={cardVariants}
              className="md:col-span-2"
            >
              <div 
                className="relative h-full border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300 group min-h-[336px] md:min-h-[365px]"
              >
                {/* Quote Icon */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-40">
                  <Image
                    src="/images/quote icon.png"
                    alt="Quote"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-4 md:space-y-6 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {testimonials[1].metric}
                    </h3>
                    <p className="text-lg md:text-xl font-semibold text-white">
                      {testimonials[1].title}
                    </p>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(testimonials[1].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {testimonials[1].text}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6 relative z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonials[1].avatar}
                      alt={testimonials[1].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm md:text-base">
                      {testimonials[1].author}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm">
                      {testimonials[1].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Two Cards - Side by Side */}
            {testimonials.slice(2).map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
              >
                <div 
                  className="relative h-full border border-white/10 rounded-lg p-6 md:p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300 group min-h-[336px] md:min-h-[365px]"
                >
                  {/* Quote Icon */}
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-40">
                    <Image
                      src="/images/quote icon.png"
                      alt="Quote"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <div className="space-y-4 md:space-y-6 relative z-10">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-6 relative z-10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm md:text-base">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}