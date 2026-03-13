import React from 'react';

const faqs = [
  {
    question: "How does Brown Mafia assist organizations?",
    answer: "Brown Mafia provides a variety of services, including strategic consulting, digital solutions, impact measurement, and capacity building to help organizations meet their goals.",
  },
  {
    question: "Is Brown Mafia suitable for small NGOs?",
    answer: "Yes! Our approach is flexible and scalable, ensuring that we can support organizations of all sizes in achieving their objectives.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support tailored to your needs, including ongoing consultation and training to ensure your success.",
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
