import React from 'react';

const testimonials = [
  {
    quote: "“Brown Mafia’s strategic guidance during RangX helped strengthen our brand strategy and align communications with organizational goals. Their insights consistently added measurable value across our initiatives.”",
    name: "Sabbir Nawazz",
    title: "Group Marketing Head",
    company: "Rangs Motors Limited",
  },
  {
    quote: "“Brown Mafia played a key role in R‑Ventures 3.0, helping us translate strategy into actionable campaigns that genuinely engaged our communities. Their expertise in strategy, digital systems, and advocacy consistently delivered measurable results.”",
    name: "Shafayet Ahmed",
    title: "Brand Manager",
    company: "Robi Axiata Limited",
  },
  {
    quote: "“Partnering with Brown Mafia transformed how we approach our programs. Their guidance, supported by practical digital tools, strengthened our operations and helped us reach communities more effectively.”",
    name: "Hasib Hossain",
    title: "Director",
    company: "Proyas Manobik Unnayan Society",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-black px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28">

      {/* Header */}
      <div className="mb-16 lg:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white mb-6">
          What Our Clients Say
        </h2>
        <p className="text-sm md:text-base font-normal leading-relaxed text-white/60 max-w-lg">
          Our partners value the transformative results we achieve together. Here are some testimonials from those we&apos;ve worked with.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col">
        {testimonials.map((t, i) => (
          <div key={i}>
            {/* Divider Line */}
            <div className="w-full h-px bg-white/20"></div>

            {/* Testimonial Row */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_0.6fr] gap-6 md:gap-12 py-12 md:py-16 lg:py-20 items-start">
              {/* Left spacer (empty on desktop to push quote to center) */}
              <div className="hidden md:block"></div>

              {/* Center: Quote */}
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white italic">
                {t.quote}
              </p>

              {/* Right: Attribution */}
              <div className="flex flex-col gap-0.5 text-white/70 text-xs md:text-sm">
                <span className="font-semibold text-white/90">{t.name}</span>
                <span>{t.title}</span>
                <span>{t.company}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Final Bottom Line */}
        <div className="w-full h-px bg-white/20"></div>
      </div>

    </section>
  );
};

export default Testimonials;
