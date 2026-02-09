// components/ui/Navbar.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Edwin', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skill', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('Edwin');
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    linkName: string,
    href: string
  ) => {
    e.preventDefault();
    setActiveLink(linkName);
    setIsOpen(false);

    // Smooth scroll to section
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      const navbarHeight = 100; // Adjust based on your navbar height

      window.scrollTo({
        top: offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop & Mobile Capsule Wrapper */}
      <div id="hero" className='fixed top-6 md:top-8 left-0 right-0 z-[60] flex justify-center px-4'>
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='flex items-center h-12 px-6 md:px-10 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl relative w-full md:w-auto'
        >
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8 lg:gap-14'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.name, link.href)}
                className='relative group cursor-pointer'
              >
                <span
                  className={`text-[11px] lg:text-[13px] uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeLink === link.name
                      ? 'text-white font-bold'
                      : 'text-gray-400 group-hover:text-white font-medium'
                  }`}
                >
                  {link.name}
                </span>
                {activeLink === link.name && (
                  <motion.div
                    layoutId='activeTab'
                    className='absolute -bottom-1 left-0 right-0 h-[1px] bg-teal-400'
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle & Active Name Indicator */}
          <div className='flex md:hidden items-center justify-between w-full'>
            <a
              href='#hero'
              onClick={(e) => handleNavClick(e, 'Edwin', '#hero')}
              className='text-[11px] uppercase tracking-[0.15em] text-white font-bold cursor-pointer hover:text-teal-400 transition-colors'
            >
              {activeLink}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-white p-1 hover:bg-white/10 rounded-full transition-colors'
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Full-Screen Glassmorphism Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 z-[65] bg-black/40 backdrop-blur-md md:hidden '
              onClick={() => setIsOpen(false)}
            />

            {/* Glassmorphism Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className='fixed top-6 left-4 right-4 z-[66] md:hidden'
            >
              {/* Main Menu Card with Glassmorphism */}
              <div className='relative overflow-hidden rounded-[32px] border border-white/10'>
                {/* Glassmorphism background */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-900/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl' />

                {/* Blurred background portrait for ambient effect */}
                <div className='absolute inset-0 opacity-20'>
                  <Image
                    src='/images/Harmonious Purple Palette - Candid Gentleman Portrait 1.png'
                    alt='Background'
                    fill
                    className='object-cover blur-3xl scale-110'
                  />
                </div>

                {/* Content */}
                <div className='relative'>
                  {/* Header with Title and Close Button */}
                  <div className='flex items-center justify-between px-6 py-5 border-b border-white/10'>
                    <a
                      href='#hero'
                      onClick={(e) => handleNavClick(e, 'Edwin', '#hero')}
                      className='text-white text-sm font-bold uppercase tracking-[0.2em] cursor-pointer hover:text-teal-400 transition-colors'
                    >
                      EDWIN
                    </a>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='p-1.5 hover:bg-white/10 rounded-full transition-colors'
                      aria-label='Close menu'
                    >
                      <X size={20} className='text-white' />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className='px-5 py-4 space-y-1'>
                    {navLinks.slice(1).map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.name, link.href)}
                        className={`block px-4 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all cursor-pointer ${
                          activeLink === link.name
                            ? 'bg-teal-500/20 text-white font-bold border border-teal-500/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-white font-medium'
                        }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}