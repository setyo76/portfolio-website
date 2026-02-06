'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact"
      className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(19, 78, 74, 1) 100%),
          url('/images/contact_background.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-6 md:px-[140px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Card - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-white/10 rounded-lg p-8 md:p-12 bg-black/40 backdrop-blur-sm"
          >
            {/* Heading */}
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Let's <span className="text-[#14b8a6]">Build Something</span> Great
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                Got an idea, a project, or just want to connect? I'm always open to new conversations.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-white text-sm md:text-base font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#14b8a6] transition-colors"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-white text-sm md:text-base font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#14b8a6] transition-colors"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-white text-sm md:text-base font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 md:px-5 md:py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#14b8a6] transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button icon variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right Card - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col justify-end"
          >
            {/* Contact Information */}
            <div className="space-y-10 md:space-y-12">
              
              {/* Address */}
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                  Address
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Jakarta, Indonesia
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                  Contact
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  (+62) 1234567890
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
                  Social Media
                </h3>
                <div className="flex gap-4">
                  <motion.a
                    href="#facebook"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.a>

                  <motion.a
                    href="#instagram"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.a>

                  <motion.a
                    href="#linkedin"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.a>

                  <motion.a
                    href="#tiktok"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#14b8a6] hover:bg-[#14b8a6]/10 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Large GET IN TOUCH Text */}
              <div className="mt-16 md:mt-20">
                <h3 className="text-[64px] md:text-[80px] lg:text-[120px] font-bold text-white leading-none tracking-tight">
                  GET IN TOUCH
                </h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}