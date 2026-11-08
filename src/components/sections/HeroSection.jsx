"use client";

import { NOTION_HERO } from "@/constants/hero";

export default function HeroSection() {
  const { headline, subtitle, ctas, heroImage, trustedBy } = NOTION_HERO;

  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header Area */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline with Pill Badge */}
          <h1 className="text-4xl sm:text-6xl md:text-[76px] font-bold tracking-tight text-[#050505] leading-[1.12]">
            {headline.line1}
            <br />
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span>{headline.line2Prefix}</span>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-[#eef6fc] px-4 py-1 sm:px-5 sm:py-1.5 align-middle">
                <span className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-[#0077d4]" />
                <span className="text-[#050505] font-bold">{headline.badgeWord}</span>
              </span>
              <span>{headline.line2Suffix}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Action Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={ctas.primary.href}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-[6px] bg-[#0077d4] hover:bg-[#0066b8] active:bg-[#005bb0] px-5 py-2.5 text-[15px] font-medium text-white shadow-xs transition-colors"
            >
              <span>{ctas.primary.label}</span>
            </a>
            <a
              href={ctas.secondary.href}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-[6px] bg-[#eef6fc] hover:bg-[#e1effa] active:bg-[#d4e8f7] px-5 py-2.5 text-[15px] font-medium text-[#0077d4] transition-colors"
            >
              <span>{ctas.secondary.label}</span>
            </a>
          </div>
        </div>

        {/* Hero Illustration Image (Jarak diperkecil ke tombol CTA) */}
        <div className="mt-5 sm:mt-7 mx-auto max-w-[1060px]">
          <div className="relative mx-auto w-full transition-transform duration-300 hover:scale-[1.004]">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-full h-auto object-contain mx-auto select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Company Logos Social Proof Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm sm:text-[15px] text-[#000000bf] font-normal">
            {trustedBy.headline}
          </p>

          {/* 2-Row Tapered Layout Semula Tanpa Scrollbar/Slider */}
          <div className="mt-4 flex flex-col items-center py-2">
            <div className="flex flex-col gap-y-4 sm:gap-y-5 px-4">
              {/* Row 1: 9 Logos (OpenAI, A24, Figma, FedEx, Ramp, Cursor, Substack, NVIDIA, Toyota) */}
              <div className="flex items-center justify-center flex-nowrap gap-5 sm:gap-7">
                {trustedBy.row1.map((company) => (
                  <div key={company.id} className="flex items-center shrink-0">
                    <img
                      src={company.file}
                      alt={company.name}
                      className="h-6 sm:h-[26px] w-auto object-contain select-none"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2: 8 Logos (Clay, Lamborghini, David Zwirner, Vercel, Faire, Lovable, Goop, Discord) - Mengkerucut ke dalam */}
              <div className="flex items-center justify-center flex-nowrap gap-5 sm:gap-7 max-w-4xl mx-auto">
                {trustedBy.row2.map((company) => (
                  <div key={company.id} className="flex items-center shrink-0">
                    <img
                      src={company.file}
                      alt={company.name}
                      className="h-6 sm:h-[26px] w-auto object-contain select-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
