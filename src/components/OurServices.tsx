import React from 'react';
import Link from 'next/link';

const OurServices = () => {
  return (
    <section id="our-services" className="w-full bg-white py-4">
      <div className="w-[85%] mx-auto">
        <div className="services-banner rounded-[40px] lg:rounded-[60px] overflow-hidden px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">
          
          {/* Left: Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black whitespace-nowrap shrink-0">
            Our<br />Services
          </h2>

          {/* Right: Description + Button */}
          <div className="flex flex-col gap-8 max-w-xl lg:max-w-2xl">
            <p className="text-sm md:text-base lg:text-lg font-normal leading-relaxed text-black/80">
              We help organizations turn strategy into action. Through consulting, technology, and advocacy, we tackle complex challenges, foster collaboration, and deliver meaningful, measurable outcomes for communities and institutions.
            </p>
            <div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold uppercase tracking-[0.15em] text-xs rounded-full transition-all duration-300 hover:bg-[#FF9300] hover:text-black hover:shadow-lg"
              >
                View All Services
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurServices;
