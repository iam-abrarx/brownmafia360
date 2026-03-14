import React from 'react';

const faqs = [
  {
    question: "1. How do you structure projects at Brown Mafia?",
    answer: "We work in clear phases: understanding client needs, designing tailored strategies, implementing digital systems or campaigns, and evaluating outcomes. This ensures each initiative delivers actionable, measurable results.",
  },
  {
    question: "2. How do you ensure your projects deliver measurable impact?",
    answer: "Every project is guided by performance indicators and data-driven monitoring, allowing us to track progress and provide insights that help organizations achieve sustainable, real-world outcomes.",
  },
  {
    question: "3. How do you collaborate with client teams during engagements?",
    answer: "We integrate closely with client teams, providing guidance, training, and digital tools to empower staff while maintaining accountability and operational effectiveness throughout the project lifecycle.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="w-full bg-[#e4eaf0] px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 lg:mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-black">
          FAQ
        </h2>
        <p className="text-sm md:text-base font-normal leading-relaxed text-black/60 max-w-md">
          Curious about how we can help you? Check out some of our frequently asked questions below.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/15">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`py-10 px-6 first:pl-0 last:pr-0 ${
              i < faqs.length - 1 ? 'md:border-r border-black/15' : ''
            }`}
          >
            <h3 className="text-base md:text-lg font-medium leading-snug text-black mb-4">
              {faq.question}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-black/60">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;
