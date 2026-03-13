import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-section-dark text-white min-h-screen w-full py-24 px-6 md:px-12 relative flex flex-col justify-between">
      <div className="flex justify-between items-start w-full">
        <div className="text-lg font-light tracking-widest uppercase">
          About<br />Us
        </div>
        <div className="w-12 h-12 relative animate-spin-slow">
            {/* Minimalist sun/ray icon placeholder */}
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[0.5]">
                {[...Array(24)].map((_, i) => (
                    <line key={i} x1="50" y1="50" x2="50" y2="0" transform={`rotate(${i * 15} 50 50)`} />
                ))}
            </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center md:text-left my-20">
        <p className="text-3xl md:text-5xl font-light leading-snug">
          Brown Mafia is dedicated to bridging the gap between strategy and execution. We leverage innovative digital systems to provide organizations with the tools they need to tackle pressing societal challenges. Our focus is on creating operational frameworks that drive sustainable progress for communities and enterprises alike.
        </p>
      </div>

      <div className="w-full max-w-md mt-12 overflow-hidden rounded-2xl aspect-[4/3] relative">
        <Image 
          src="/team.jpg" 
          alt="Office Team" 
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUs;
