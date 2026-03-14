import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: "01",
    title: "Strategic Consulting – Navigating Change",
    description: "Our strategic consulting practice helps organizations understand their core challenges and turn vision into actionable strategies. In 2026, we guided Rangs Motors Limited on market entry into the high-growth sustainable EV sector, assessing feasibility and risk along the way."
  },
  {
    id: "02",
    title: "Precision Analytics & BI – Building Operational Systems",
    description: "We design analytics frameworks that transform complex data into actionable intelligence. In 2024, our predictive modeling for Dr. Batra’s optimized regional demand forecasts and supported market expansion strategies."
  },
  {
    id: "03",
    title: "Advocacy & Digital Engagement – Assessing Outcomes",
    description: "Effective advocacy requires insight and impact measurement. In 2023, our ad operations and digital communication strategy strengthened community engagement for Robi Ventures 3.0 by Robi Axiata Limited."
  },
  {
    id: "04",
    title: "Capacity Building – Empowering Teams",
    description: "We deliver training and programs that equip teams with the skills and knowledge to implement strategies effectively. Our approach ensures organizations are ready to meet both current and future challenges."
  }
];

const OurServices = () => {
  return (
    <section id="our-services" className="w-full bg-white py-10">
      <div className="w-full">
        <div className="services-banner rounded-none overflow-hidden px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28 flex flex-col items-start gap-12 lg:gap-20">
          
          {/* Top Section: Heading + Description */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 w-full max-w-[85%] mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black whitespace-nowrap shrink-0">
              Our<br />Services
            </h2>
            <div className="flex flex-col gap-8 max-w-xl lg:max-w-2xl">
              <p className="text-sm md:text-base lg:text-lg font-normal leading-relaxed text-black/80">
                We help organizations turn strategy into action. Through consulting, technology, and advocacy, we tackle complex challenges, foster collaboration, and deliver meaningful, measurable outcomes for communities and institutions.
              </p>
            </div>
          </div>

          {/* Bottom Section: Services List (Full Width) */}
          <div className="flex flex-col gap-6 w-full max-w-[85%] mx-auto mt-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-12 rounded-[30px] bg-white/40 backdrop-blur-sm border border-black/5 hover:bg-gradient-to-r hover:from-[#FF9300] hover:to-[#FFB347] hover:text-white transition-all duration-1000 ease-in-out w-full cursor-default"
              >
                <span className="text-[#FF9300] group-hover:text-white font-bold tracking-widest text-2xl transition-colors duration-1000 ease-in-out">{service.id}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black group-hover:text-white tracking-tight transition-colors duration-1000 ease-in-out">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg text-black/60 group-hover:text-white/90 leading-relaxed max-w-4xl transition-colors duration-1000 ease-in-out">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 max-w-[85%] mx-auto">
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
    </section>
  );
};

export default OurServices;
