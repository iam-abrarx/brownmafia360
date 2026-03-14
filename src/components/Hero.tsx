import React from 'react';

// ==========================================
// 🛠️ HERO SECTION CONFIGURATION
// Edit the values below to easily change text, spacing, and layout.
// ==========================================

const CONTENT = {
  headingLine1: "Consult",
  headingLine2: "Build",
  headingLine3: "Engage",
  description: "We help organizations turn strategy into action. Through consulting, technology, and advocacy, we tackle complex challenges, foster collaboration, and deliver meaningful, measurable outcomes for communities and institutions.",
  buttonLabel: "See Our Work",
};

const STYLES = {
  // 1. Layout Width & Grid Ratio
  sectionWidth: "w-[95%] mx-auto",
  panelRatio: "grid-cols-1 lg:grid-cols-[1.5fr_1fr]", // 3:2 Ratio (1.5:1)
  
  // 2. Corner Rounding for Panels
  panelRadius: "rounded-[40px] lg:rounded-[60px]",
  
  // 3. Left Panel (Heading) Spacing - Controls where the font sits inside the left orange gradient
  leftPanelPadding: "pt-24 pl-8 md:pt-32 md:pl-16 lg:pt-48 lg:pl-32 pb-16 pr-8",
  
  // 4. Right Panel (Description) Spacing - Controls where text sits in the right panel
  rightPanelPadding: "pt-24 pl-8 md:pt-32 md:pl-16 lg:pt-48 lg:pl-20 pr-8 lg:pr-16 pb-16",
  
  // 5. Typography
  fontColor: "text-black",
  headingSize: "text-6xl md:text-8xl lg:text-9xl",
  descriptionSize: "text-xl md:text-2xl lg:text-3xl",
};

// ==========================================
// 🖥️ COMPONENT STRUCTURE
// ==========================================

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col bg-white pt-10 pb-16">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 lg:gap-8 w-[95%] mx-auto">
        
        {/* LEFT PANEL */}
        <div className="hero-panel-left rounded-[40px] lg:rounded-[60px] flex flex-col justify-start items-start overflow-hidden">
          {/* Padding is applied explicitly here so Tailwind compiles it 100% reliably */}
          <div className="w-full pt-16 pl-8 md:pt-20 md:pl-16 lg:pt-24 lg:pl-24 pb-16 pr-12 md:pr-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight text-black flex flex-col">
              <span>{CONTENT.headingLine1}</span>
              <span>{CONTENT.headingLine2}</span>
              <span>{CONTENT.headingLine3}</span>
            </h1>
          </div>
        </div>
        
        {/* RIGHT PANEL */}
        <div className="hero-panel-right rounded-[40px] lg:rounded-[60px] flex flex-col justify-start items-end text-right overflow-hidden">
          <div className="w-full h-full flex flex-col justify-between pt-16 pr-8 md:pt-20 md:pr-16 lg:pt-24 lg:pr-24 pl-8 lg:pl-16 pb-16">
            
            {/* Top Content: Description & Button */}
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug text-black mb-12 italic tracking-tight">
                {CONTENT.description}
              </p>
              
              <button className="group relative inline-flex items-center justify-center px-10 py-5 lg:px-14 lg:py-6 bg-[#FF9300] text-black border-4 border-black font-black uppercase tracking-[0.2em] lg:tracking-[0.25em] text-xs lg:text-sm transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                  {CONTENT.buttonLabel}
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
