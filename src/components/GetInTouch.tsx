'use client';

import React, { useState } from 'react';

const GetInTouch = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up form submission
    console.log('Form submitted:', form);
  };

  return (
    <section id="contact" className="w-full bg-white py-4">
      <div className="w-[85%] mx-auto">
        <div className="bg-[#111111] rounded-[40px] lg:rounded-[60px] overflow-hidden px-10 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">

            {/* Left: Heading + Subtitle */}
            <div className="flex flex-col justify-between">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white mb-8">
                Get in Touch
              </h2>
              <p className="text-sm font-normal leading-relaxed text-white/50 max-w-xs mt-auto hidden lg:block">
                We are eager to hear from you and discuss how we can support your initiatives. Reach out to us anytime!
              </p>
            </div>

            {/* Right: Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/60">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/60">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/60">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-[#2a2a2a] text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-white/60">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-[#2a2a2a] text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-white/60">Your message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-[#2a2a2a] text-white text-sm rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white/10 text-white text-sm font-semibold uppercase tracking-[0.15em] rounded-full border border-white/20 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer mt-2"
              >
                Submit
              </button>

              {/* Mobile subtitle */}
              <p className="text-sm font-normal leading-relaxed text-white/50 max-w-xs mt-4 lg:hidden">
                We are eager to hear from you and discuss how we can support your initiatives. Reach out to us anytime!
              </p>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
