'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!mounted) {
    return (
        <header className="sticky top-0 left-0 w-full z-[150] h-32 px-6 py-4 md:px-12 flex justify-between items-center bg-white border-b-2 border-black/5">
            <div className="flex items-center gap-16">
                <div className="relative w-32 h-32">
                    <Image src="/BM_LOGO_dark.png" alt="Logo" fill className="object-contain" priority />
                </div>
            </div>
        </header>
    );
  }

  return (
    <header className="sticky top-0 left-0 w-full z-[150] h-32 px-6 py-4 md:px-12 flex justify-between items-center bg-white border-b-2 border-black/5 transition-all duration-300">
      <div className="flex items-center gap-16">
        <Link href="/" className="flex items-center group z-[110]">
          <div className="relative w-32 h-32 transition-transform group-hover:scale-110">
            <Image 
              src="/BM_LOGO_dark.png" 
              alt="Brown Mafia Logo" 
              fill
              className={`object-contain transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
              priority
            />
            <Image 
                src="/BM_LOGO_light.png" 
                alt="Brown Mafia Logo" 
                fill
                className={`object-contain transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </Link>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] flex flex-col gap-1.5 cursor-pointer p-4 -mr-4 group"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col gap-[7px]">
            <span className={`w-10 h-0.5 transition-all duration-500 origin-center ${isOpen ? 'bg-white rotate-45 translate-y-[9px]' : 'bg-black'}`}></span>
            <span className={`w-7 h-0.5 transition-all duration-500 ml-auto ${isOpen ? 'bg-white opacity-0' : 'bg-black'}`}></span>
            <span className={`w-10 h-0.5 transition-all duration-500 origin-center ${isOpen ? 'bg-white -rotate-45 -translate-y-[9px]' : 'bg-black'}`}></span>
        </div>
      </button>

      <div 
        className={`fixed inset-0 bg-black transition-all duration-700 ease-in-out z-[100] flex items-center justify-center overflow-x-hidden ${
          isOpen ? 'translate-y-0 clip-path-circle-open' : '-translate-y-full clip-path-circle-closed'
        }`}
      >
        <nav className="w-full max-w-4xl px-12">
            <ul className="flex flex-col gap-6 md:gap-10">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '#about-us' },
                  { label: 'Services', href: '#our-services' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' },
                ].map((item, index) => (
                    <li key={item.label} 
                        style={{ 
                            transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
                        }}
                        className={`transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    >
                        <Link 
                            href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-4xl md:text-7xl font-light text-white hover:text-accent-orange hover:italic transition-all inline-block"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
