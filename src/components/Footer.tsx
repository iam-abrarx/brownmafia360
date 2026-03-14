import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#e4eaf0] relative overflow-hidden">

      {/* Orange gradient accent behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-[#FF9300] opacity-50 blur-[100px]"></div>
      </div>

      <div className="relative z-10 px-10 md:px-16 lg:px-24">

        {/* Top divider */}
        <div className="w-full h-px bg-black/15"></div>

        {/* Large Tagline */}
        <div className="py-14 md:py-20">
          <h2 className="text-5xl md:text-7xl lg:[font-size:80px] font-bold leading-[1.05] tracking-tight text-black">
            Empowering Businesses Worldwide
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/15"></div>

        {/* Middle Row: Brand + Contact Info */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 py-14 md:py-20">
          <p className="text-2xl md:text-3xl font-semibold text-black">Brown Mafia</p>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-lg text-black/70">
            <div className="flex flex-col gap-1.5">
              <span>info@brownmafia.net</span>
              <span>+880 176 2980 646</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span>Mohammadpur,</span>
              <span>Dhaka – 1207, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 pb-20 md:pb-28">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="text-black hover:text-[#FF9300] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
            </svg>
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-black hover:text-[#FF9300] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
            </svg>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="w-full h-px bg-black/15"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 text-xs text-black/50 italic">
          <span>Privacy Policy / Accessibility Statement</span>
          <span>© by Brown Mafia.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
